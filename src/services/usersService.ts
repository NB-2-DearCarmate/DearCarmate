import { PrismaClient, User } from "@prisma/client";
import { create } from "superstruct";
import {
  CreateUserStruct,
  UpdateMyInfoStruct,
} from "../validators/UsersStructs";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

class UserService {
  // 회원가입
  createUser = async (
    rawData: any
  ): Promise<{
    id: number;
    name: string;
    email: string;
    employeeNumber: string;
    phoneNumber: string;
    imageUrl: string | null;
    isAdmin: boolean;
    company: {
      companyCode: string;
    };
  }> => {
    const data = create(rawData, CreateUserStruct);

    const { name, email, employeeNumber, phoneNumber, password, companyCode } =
      data;

    const existingUser: User | null = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw { status: 409, message: "이미 존재하는 이메일입니다." };
    }

    const companyData = await prisma.company.findUnique({
      where: { companyCode },
    });
    if (!companyData) {
      throw { status: 400, message: "유효하지 않은 회사 코드입니다." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        employeeNumber,
        phoneNumber,
        password: hashedPassword,
        companyId: companyData.id,
        isAdmin: false,
      },
      include: {
        company: {
          select: {
            companyCode: true,
          },
        },
      },
    });

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      employeeNumber: newUser.employeeNumber,
      phoneNumber: newUser.phoneNumber,
      imageUrl: newUser.imageUrl,
      isAdmin: newUser.isAdmin,
      company: {
        companyCode: newUser.company.companyCode,
      },
    };
  };

  // 정보 조회
  getMyInfo = async (
    userId: number
  ): Promise<{
    id: number;
    name: string;
    email: string;
    employeeNumber: string;
    phoneNumber: string;
    imageUrl: string | null;
    isAdmin: boolean;
    company: {
      companyCode: string;
    };
  }> => {
    const user: (User & { company: { companyCode: string } }) | null =
      await prisma.user.findUnique({
        where: { id: userId },
        include: {
          company: {
            select: {
              companyCode: true,
            },
          },
        },
      });

    if (!user) {
      throw { status: 404, message: "존재하지 않는 유저입니다!" };
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      employeeNumber: user.employeeNumber,
      phoneNumber: user.phoneNumber,
      imageUrl: user.imageUrl,
      isAdmin: user.isAdmin,
      company: {
        companyCode: user.company?.companyCode || "",
      },
    };
  };

  // 정보 수정
  updateMyInfo = async (
    userId: number,
    rawData: unknown
  ): Promise<User & { company: { companyCode: string } }> => {
    const data = create(rawData, UpdateMyInfoStruct);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { company: true },
    });

    if (!user) {
      throw { status: 404, message: "존재하지 않는 유저입니다!" };
    }

    const passwordMatch = await bcrypt.compare(
      data.currentPassword,
      user.password
    );
    if (!passwordMatch) {
      throw { status: 400, message: "현재 비밀번호가 맞지 않습니다!" };
    }

    if (data.password && data.password !== data.passwordConfirmation) {
      throw {
        status: 400,
        message: "비밀번호와 비밀번호 확인이 일치하지 않습니다!",
      };
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        employeeNumber: data.employeeNumber,
        phoneNumber: data.phoneNumber,
        imageUrl: data.imageUrl,
        password: data.password
          ? await bcrypt.hash(data.password, 10)
          : undefined,
      },
      include: {
        company: {
          select: {
            companyCode: true,
          },
        },
      },
    });

    return updatedUser;
  };

  // 회원탈퇴
  deleteMyAccount = async (userId: number): Promise<void> => {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      throw { status: 404, message: "존재하지 않는 유저입니다!" };
    }

    await prisma.user.delete({ where: { id: userId } });
  };

  // 유저 삭제
  deleteUserById = async (userId: number): Promise<void> => {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      throw { status: 404, message: "존재하지 않는 유저입니다!" };
    }

    await prisma.user.delete({ where: { id: userId } });
  };
}

export default UserService;
