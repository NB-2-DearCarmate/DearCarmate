import { Request, Response } from "express";
import UserService from "../services/usersService";
import { AuthenticatedUserRequest } from "../typings/express";
import { CreateUserRequest, UserResponse } from "../dto/usersDTO";
import { UpdateMyInfoStruct } from "../validators/UsersStructs";
import { create } from "superstruct";

const userService = new UserService();

// 회원가입
export const createUserHandler = async (
  req: Request<{}, UserResponse, CreateUserRequest>,
  res: Response<UserResponse | { message: string }>
): Promise<void> => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    const status = err.status || 500;
    res.status(status).json({ message: err.message || "서버 에러" });
  }
};

// 정보 조회
export const getMyInfoHandler = async (
  req: AuthenticatedUserRequest,
  res: Response<UserResponse | { message: string }>
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "로그인이 필요합니다!" });
      return;
    }

    const user = await userService.getMyInfo(Number(req.user.id));
    res.status(200).json(user);
  } catch (err: any) {
    const status = err.status || 500;
    res.status(status).json({ message: err.message || "서버 오류" });
  }
};

// 정보 수정
export const updateMyInfoHandler = async (
  req: AuthenticatedUserRequest,
  res: Response<UserResponse | { message: string }>
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "로그인이 필요합니다!" });
      return;
    }

    const data = create(req.body, UpdateMyInfoStruct);
    const user = await userService.updateMyInfo(Number(req.user.id), data);

    res.status(200).json(user);
  } catch (err: any) {
    const status = err.status || 500;
    res.status(status).json({ message: err.message || "서버 오류" });
  }
};

// 회원탈퇴
export const deleteMyAccountHandler = async (
  req: AuthenticatedUserRequest,
  res: Response<{ message: string }>
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "로그인이 필요합니다!" });
      return;
    }

    await userService.deleteMyAccount(Number(req.user.id));
    res.status(200).json({ message: "유저 삭제 성공" });
  } catch (err: any) {
    const status = err.status || 500;
    const message = err.message || "서버 오류";
    res.status(status).json({ message });
  }
};
