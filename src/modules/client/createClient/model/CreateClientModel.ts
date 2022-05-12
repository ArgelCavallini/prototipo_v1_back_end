import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  nome: string;
  sobrenome: string;
  cpf: number;
  e_mail: string;
  telefone_fixo?:number;
  telefone_movel?:number;
  cep:number;
}

export class CreateClientModel {
  async execute({
    nome,
    sobrenome,
    cpf,
    e_mail,
    telefone_fixo,
    telefone_movel,
    cep
  }:ICreateClient) {

    if (!nome) {
      throw new Error("Nome is required!")
    }
    if (!sobrenome) {
      throw new Error("Sobrenome is required!")
    }
    if (!cpf) {
      throw new Error("CPF is required!")
    }
    if (!cpf) {
      throw new Error("E-mail is required!")
    }
    if (!cpf) {
      throw new Error("CEP is required!")
    }
    const clientExist = await prisma.cliente.findFirst({
      where:{
        cpf: {
          equals: cpf
        }
      }
    });

    if (clientExist) {
      throw new Error("Client already exists")
    }

    // Salvar
    const client = await prisma.cliente.create({
      data: {
        nome,
        sobrenome,
        cpf,
        e_mail,
        telefone_fixo,
        telefone_movel,
        cep,
        ativo:true
      }
    });

    return client;
  }
}