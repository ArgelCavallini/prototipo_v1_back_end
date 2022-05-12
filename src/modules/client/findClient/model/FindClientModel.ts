import { prisma } from "../../../../database/prismaClient";

export class FindClientModel {
  async execute() {
    const listClients = await prisma.cliente.findMany();

    return listClients;
  }
}