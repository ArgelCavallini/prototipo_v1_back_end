import { prisma } from "../../../../../database/prismaClient";

export class FindUserModel {
  async execute() {
    const users = await prisma.usuario.findMany({
      select: {
        id:true,
        username: true,
        password: false,
      },
    });

    return users;
  }
}