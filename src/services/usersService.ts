import { PrismaClient } from "@prisma/client";
import { create } from "superstruct";
import { CreateUserStruct } from "../validators/UsersStructs";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export class UserService {
  async createUser(rawData: any) {
    const data = create(rawData, CreateUserStruct);

    const { name, email, employeeNumber, phoneNumber, password, companyCode } =
      data;

    const existingUser = await prisma.user.findUnique({ where: { email } });
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
  }
}
