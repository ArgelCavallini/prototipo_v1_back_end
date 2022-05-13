import { prisma } from "../../../../../database/prismaClient";

export class DeleteUserModel {
  async execute(id: string) {
    const userExist = await prisma.usuario.findFirst({
      where: {
        id: id
      }
    });

    if (!userExist) {
      throw new Error("User not exists")
    }

    // Deletar
    const deleteUser = await prisma.usuario.delete({
      where: {
        id: id
      }
    });

    return deleteUser.id;
  }
}