import { ContractStatus } from "@prisma/client";
import {
  CreateContractDTO,
  MeetingDTO,
  UpdateContractDTO,
} from "../dto/contractDTO";
import BadRequestError from "../errors/BadRequestError";
import ForbiddenError from "../errors/ForbiddenError";
import prisma from "../lib/prisma";
import contractRepository from "../repositories/contractRepository";
import {
  ContractList,
  CursorPaginationResultWithTotal,
  ContractWithDetails,
} from "../typings/contract";
import meetingService from "./meetingService";

// 계약 조회
const getContractList = async (
  companyId: number,
  { searchBy, keyword }: ContractList,
  status: ContractStatus
): Promise<CursorPaginationResultWithTotal<ContractWithDetails>> => {
  const contracts = await contractRepository.getContractList(
    companyId,
    { searchBy, keyword },
    status
  );
  return contracts;
};

// 고객 조회

const getCustomerList = async (companyId: number) => {
  return await contractRepository.getCustomerList(companyId);
};

// 차량 조회

const getCarList = async (companyId: number) => {
  return await contractRepository.getCarList(companyId);
};

// 유저 조회

const getUserList = async (companyId: number) => {
  return await contractRepository.getUserList(companyId);
};

// 계약 생성
const createContract = async (data: CreateContractDTO) => {
  const car = await contractRepository.getCarId(data.carId);

  if (car.status !== "possession") {
    throw new BadRequestError("현재 계약 진행 중인 차량입니다.");
  }

  return await prisma.$transaction(async (tx) => {
    const updateCarStatus = await contractRepository.updateCarStatus(
      car.id,
      tx
    );

    const contractData = {
      ...data,
      contractPrice: car.price,
    };

    const contract = await contractRepository.save(contractData, tx);

    let meetings: MeetingDTO[] = [];
    if (data.meetings) {
      meetings = await meetingService.createWithAlarms(
        contract.id,
        data.meetings.map((meeting) => ({
          date: meeting.date,
          alarms: meeting.alarms || [],
        })),
        tx
      );
    }

    return {
      contract,
      meetings,
    };
  });
};

// 계약 수정
const updateContract = async (
  id: number,
  userId: number,
  contractDocuments: { id: number; filename: string }[],
  data: UpdateContractDTO,
  meetings?: MeetingDTO[]
) => {
  const findContract = await contractRepository.getById(id);

  if (findContract.status !== "priceNegotiation" && data.contractPrice) {
    throw new BadRequestError("가격 협의 상태에서 가격 정정이 가능합니다.");
  }
  if (userId !== findContract.userId) {
    throw new ForbiddenError("담당자만 수정이 가능합니다.");
  }

  const update = await prisma.$transaction(async (tx) => {
    let meetingResult: MeetingDTO[] = [];
    if (meetings) {
      meetingResult = await meetingService.updateMeetings(id, meetings, tx);
    }

    const updatedContract = await contractRepository.update(id, data, tx);

    if (contractDocuments && contractDocuments.length > 0) {
      const documentId = contractDocuments.map((item) => item.id);
      const getDocument = await contractRepository.verifyDocumentsExist(
        documentId,
        tx
      );

      const contractDocumentUpdate =
        await contractRepository.updateContractDocuments(id, documentId, tx);
    }

    if (updatedContract.status === "contractSuccessful") {
      await contractRepository.completedCar(updatedContract.car.id, tx);
    } else if (updatedContract.status === "contractFailed") {
      await contractRepository.failedCar(updatedContract.car.id, tx);
    }
    return {
      updatedContract,
      meetingResult,
    };
  });

  return update;
};

// 계약 삭제
const deleteById = async (id: number, userId: number) => {
  const findContract = await contractRepository.getById(id);

  if (userId !== findContract.userId) {
    throw new ForbiddenError("담당자만 삭제가 가능합니다.");
  }

  const carStatus = await contractRepository.carStatus(findContract.carId);

  return await contractRepository.deleteById(id);
};

const getMeetings = async (contractId: number) => {
  const meetings = await contractRepository.getMeeting(contractId);
  return meetings;
};

export default {
  getContractList,
  createContract,
  updateContract,
  deleteById,
  getCustomerList,
  getCarList,
  getUserList,
  getMeetings,
};
