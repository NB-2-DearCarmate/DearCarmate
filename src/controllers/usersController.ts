import { Request, Response } from "express";
import UserService from "../services/usersService";
import { AuthenticatedUserRequest } from "../typings/express";
import {
  CreateUserRequest,
  UpdateMyInfoRequest,
  UserResponse,
} from "../dto/usersDTO";
import { UpdateMyInfoStruct } from "../validators/UsersStructs";
import { UserIdParamsStruct } from "../validators/CommonStruct";
import { create } from "superstruct";
import UnauthorizedError from "../errors/UnauthorizedError";
import ForbiddenError from "../errors/ForbiddenError";

const userService = new UserService();

// 회원가입
export const createUserHandler = async (
  req: Request<{}, UserResponse, CreateUserRequest>,
  res: Response<UserResponse | { message: string }>
): Promise<void> => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
};

// 정보 조회
export const getMyInfoHandler = async (
  req: AuthenticatedUserRequest,
  res: Response<UserResponse | { message: string }>
): Promise<void> => {
  if (!req.user) {
    throw new UnauthorizedError();
  }

  const user = await userService.getMyInfo(Number(req.user.id));
  res.status(200).json(user);
};

// 정보 수정
export const updateMyInfoHandler = async (
  req: AuthenticatedUserRequest,
  res: Response<UserResponse | { message: string }>
): Promise<void> => {
  if (!req.user) {
    throw new UnauthorizedError();
  }

  const data = create(req.body, UpdateMyInfoStruct) as UpdateMyInfoRequest;
  const user = await userService.updateMyInfo(Number(req.user.id), data);

  res.status(200).json(user);
};

// 회원탈퇴
export const deleteMyAccountHandler = async (
  req: AuthenticatedUserRequest,
  res: Response<{ message: string }>
): Promise<void> => {
  if (!req.user) {
    throw new UnauthorizedError();
  }

  await userService.deleteMyAccount(Number(req.user.id));
  res.status(200).json({ message: "유저 삭제 성공" });
};

// 유저 삭제
export const deleteUserHandler = async (
  req: AuthenticatedUserRequest,
  res: Response<{ message: string }>
): Promise<void> => {
  if (!req.user || !req.user.isAdmin) {
    throw new ForbiddenError("관리자 권한이 필요합니다.");
  }

  const { userId } = create(req.params, UserIdParamsStruct);
  await userService.deleteUserById(Number(userId));

  res.status(200).json({ message: "유저 삭제 성공" });
};
