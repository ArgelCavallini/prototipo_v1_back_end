import { prisma } from "../../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateUser {
  username: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({password, username}:ICreateUser) {
    const userExist = await prisma.usuario.findFirst({
      where:{
        username: {
          equals: username,
          mode: "insensitive",
        }
      }
    });

    if (userExist) {
      throw new Error("User already exists")
    }

    // Criptografar a senha
    const hashPassword = await hash(password, 10);

    // Salvar
    const usser = await prisma.usuario.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return usser;
  }
}