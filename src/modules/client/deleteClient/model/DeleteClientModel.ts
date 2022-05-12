import { prisma } from "../../../../database/prismaClient";

export class DeleteClientModel {
  async execute(id: string) {
    const clientExist = await prisma.cliente.findFirst({
      where: {
        id: id
      }
    });

    if (!clientExist) {
      throw new Error("Client not exists")
    }

    // Deletar
    const deleteUser = await prisma.cliente.delete({
      where: {
        id: id
      }
    });

    return deleteUser.id;
  }
}