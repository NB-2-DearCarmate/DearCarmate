import { Request, Response } from "express";
import { ContractStatus } from "@prisma/client";
import contractService from "../services/contractService";
import {
  ContractStruct,
  UpdateContractStruct,
  ContractListStruct,
  updateMeetings,
} from "../validators/ContractStructs";
import { create } from "superstruct";
import { IdParamsStruct } from "../validators/CommonStruct";
import UnauthorizedError from "../errors/UnauthorizedError";
import BadRequestError from "../errors/BadRequestError";
import NotFoundError from "../errors/NotFoundError";
import {
  contractListFormat,
  createContractFormat,
  listFotmat,
  updateContractFormat,
} from "../utils/ContractRespnse";

//계약 조회
export const getContractList = async (req: Request, res: Response) => {
  const { searchBy = "customerName", keyword = "" } = req.query as {
    searchBy?: "customerName" | "userName";
    keyword?: string;
  };

  if (!["customerName", "userName"].includes(searchBy)) {
    throw new BadRequestError("SearchBy 값을 확인해주세요.");
  }

  const user = req.user;

  if (!user) {
    throw new UnauthorizedError();
  }

  const companyId = user.companyId;
  if (!companyId) {
    throw new NotFoundError("회사");
  }

  const params = create(req.query, ContractListStruct);

  const CONTRACT_STATUS_ORDER: ContractStatus[] = [
    ContractStatus.carInspection,
    ContractStatus.priceNegotiation,
    ContractStatus.contractDraft,
    ContractStatus.contractSuccessful,
    ContractStatus.contractFailed,
  ];

  const contractByStatus = CONTRACT_STATUS_ORDER.reduce((acc, status) => {
    acc[status] = { totalItemCount: 0, data: [] };
    return acc;
  }, {} as Record<ContractStatus, { totalItemCount: number; data: any[] }>);

  for (const status of CONTRACT_STATUS_ORDER) {
    const contracts = await contractService.getContractList(
      companyId,
      { searchBy, keyword },
      status
    );

    const contractResult = contractListFormat(contracts.list);

    contractByStatus[status] = {
      totalItemCount: contracts.totalContract,
      data: contractResult,
    };
  }

  res.status(200).send(contractByStatus);
};

// 고객 조회
export const getCustomerList = async (req: Request, res: Response) => {
  const user = req.user;

  if (!user) {
    throw new UnauthorizedError();
  }

  const companyId = user.companyId;
  if (!companyId) {
    throw new NotFoundError("회사");
  }

  const customerList = await contractService.getCustomerList(companyId);

  const result = listFotmat(customerList);

  res.status(200).send(result);
};

// 차량 조회
export const getCarList = async (req: Request, res: Response) => {
  const user = req.user;

  if (!user) {
    throw new UnauthorizedError();
  }

  const companyId = user.companyId;
  if (!companyId) {
    throw new NotFoundError("회사");
  }
  const carList = await contractService.getCarList(companyId);

  const result = listFotmat(carList);

  res.status(200).send(result);
};

// 유저 조회
export const getUserList = async (req: Request, res: Response) => {
  const user = req.user;

  if (!user) {
    throw new UnauthorizedError();
  }

  const companyId = user.companyId;
  if (!companyId) {
    throw new NotFoundError("회사");
  }
  const userList = await contractService.getUserList(companyId);

  const result = listFotmat(userList);

  res.status(200).send(result);
};

//계약 생성
export const createContract = async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    throw new UnauthorizedError();
  }

  const companyId = user.companyId;
  if (!companyId) {
    throw new NotFoundError("회사");
  }
  const parsedData = create(req.body, ContractStruct);

  const contractData = {
    carId: parsedData.carId,
    customerId: parsedData.customerId,
    userId: user.id,
    companyId,
    status: "carInspection" as ContractStatus,
    resolutionDate: null,
    contractPrice: 0,
    meetings: parsedData.meetings,
  };

  const createContract = await contractService.createContract(contractData);

  const result = createContractFormat(createContract);

  res.status(201).send(result);
};

//계약 수정
export const updateContract = async (req: Request, res: Response) => {
  const { meetings, contractDocuments, ...contractData } = req.body;

  const user = req.user;
  if (!user) throw new UnauthorizedError();

  const userId = user.id;

  const { id } = create(req.params, IdParamsStruct);
  const parsedData = create(contractData, UpdateContractStruct);
  const parsedMeeting = create(meetings, updateMeetings);

  if (
    parsedData.status === "contractSuccessful" &&
    !parsedData.resolutionDate
  ) {
    throw new BadRequestError("계약 일자는 필수값입니다.");
  }

  const updatedContract = await contractService.updateContract(
    id,
    userId,
    contractDocuments,
    parsedData,
    parsedMeeting
  );

  const currentMeetings = await contractService.getMeetings(id);

  const result = updateContractFormat(updatedContract, currentMeetings);
  res.status(200).send(result);
};

//계약 삭제
export const deleteContract = async (req: Request, res: Response) => {
  const user = req.user;

  if (!user) {
    throw new UnauthorizedError();
  }

  const userId = user.id;
  const { id } = create(req.params, IdParamsStruct);
  const contract = await contractService.deleteById(id, userId);

  res.status(200).send({ message: "계약 삭제 성공" });
};
