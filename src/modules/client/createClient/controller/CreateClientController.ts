import { Request, Response } from "express";
import { CreateClientModel } from "../model/CreateClientModel";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const {
      nome,
      sobrenome,
      cpf,
      e_mail,
      telefone_fixo,
      telefone_movel,
      cep
    } = request.body;

    const createClient = new CreateClientModel();
    const result = await createClient.execute({
      nome,
      sobrenome,
      cpf,
      e_mail,
      telefone_fixo,
      telefone_movel,
      cep
    })

    return response.json(result);
  }
}