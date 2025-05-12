import { Request, Response } from "express";
import { format } from "date-fns";
import contractService from "../services/contractService";
import {
  ContractStruct,
  UpdateContractStruct,
  ContractListStruct,
  updateMeetings,
} from "../validators/ContractStructs";
import { create } from "superstruct";
import { IdParamsStruct } from "../validators/CommonStruct";
import { ContractStatus, CONTRACT_STATUS_ORDER } from "../typings/contract";
import {
  ContractListDTO,
  CreateContractResponseDTO,
  listDTO,
  UpdateContractResponseDTO,
} from "../dto/contractDTO";
import UnauthorizedError from "../errors/UnauthorizedError";
import BadRequestError from "../errors/BadRequestError";

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

  const userId = user.id;
  const params = create(req.query, ContractListStruct);

  const contractByStatus = CONTRACT_STATUS_ORDER.reduce((acc, status) => {
    acc[status] = { totalItemCount: 0, data: [] };
    return acc;
  }, {} as Record<ContractStatus, { totalItemCount: number; data: any[] }>);

  for (const status of CONTRACT_STATUS_ORDER) {
    const contracts = await contractService.getContractList(
      userId,
      { searchBy, keyword },
      status
    );

    const contractResult: ContractListDTO[] = contracts.list.map(
      (contract) => ({
        id: contract.id,
        status: contract.status,
        contractPrice: contract.contractPrice,
        resolutionDate: contract.resolutionDate,
        car: {
          id: contract.car.id,
          model: contract.car.model.name,
        },
        customer: {
          id: contract.customer.id,
          name: contract.customer.name,
        },
        user: {
          id: contract.user.id,
          name: contract.user.name,
        },
        meetings: contract.meetings.map((meeting) => ({
          date: format(new Date(meeting.date), "yyyy-MM-dd"),
          alarms: meeting.alarms.map((alarm) =>
            format(new Date(alarm.alarmAt), "yyyy-MM-dd'T'HH:mm:ss")
          ),
        })),
      })
    );

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

  const userId = user.id;
  const customerList = await contractService.getCustomerList(userId);

  const result: listDTO[] = customerList.map((customer) => ({
    id: customer.id,
    data: customer.name,
  }));

  res.status(200).send(result);
};

// 차량 조회
export const getCarList = async (req: Request, res: Response) => {
  const user = req.user;

  if (!user) {
    throw new UnauthorizedError();
  }

  const userId = user.id;
  const carList = await contractService.getCarList(userId);

  const result: listDTO[] = carList.map((car) => ({
    id: car.id,
    data: car.name,
  }));

  res.status(200).send(result);
};

// 유저 조회
export const getUserList = async (req: Request, res: Response) => {
  const user = req.user;

  if (!user) {
    throw new UnauthorizedError();
  }

  const userId = user.id;
  const userList = await contractService.getUserList(userId);

  const result: listDTO[] = userList.map((user) => ({
    id: user.id,
    data: user.name,
  }));

  res.status(200).send(result);
};

//계약 생성
export const createContract = async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    throw new UnauthorizedError();
  }

  const userId = user.id;
  const parsedData = create(req.body, ContractStruct);

  const contractData = {
    carId: parsedData.carId,
    customerId: parsedData.customerId,
    userId,
    status: "carInspection" as ContractStatus,
    resolutionDate: null,
    contractPrice: 0,
    meetings: parsedData.meetings,
  };

  const createContract = await contractService.createContract(contractData);

  const contractResult: CreateContractResponseDTO = {
    id: createContract.contract.id,
    status: createContract.contract.status,
    resolutionDate: createContract.contract.resolutionDate,
    meetings: createContract.meetings,
    user: {
      id: userId,
      name: createContract.contract.user.name,
    },
    customer: {
      id: createContract.contract.customer.id,
      name: createContract.contract.customer.name,
    },
    car: {
      id: createContract.contract.car.id,
      model: createContract.contract.car.model.name,
    },
  };

  res.status(201).send(contractResult);
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

  const result: UpdateContractResponseDTO = {
    id: updatedContract.updatedContract.id,
    status: updatedContract.updatedContract.status,
    resolutionDate: updatedContract.updatedContract.resolutionDate,
    contractPrice: updatedContract.updatedContract.contractPrice,
    meetings: currentMeetings,
    user: {
      id: userId,
      name: updatedContract.updatedContract.user.name,
    },
    customer: {
      id: updatedContract.updatedContract.customer.id,
      name: updatedContract.updatedContract.customer.name,
    },
    car: {
      id: updatedContract.updatedContract.car.id,
      model: updatedContract.updatedContract.car.model.name,
    },
  };
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
