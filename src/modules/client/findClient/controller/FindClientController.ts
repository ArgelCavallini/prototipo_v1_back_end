import { Request, Response } from "express";
import { FindClientModel } from "../model/FindClientModel";

export class FindClientController {
  async handle(request: Request, response: Response){

    const findClient = new FindClientModel();
    const listClients = await findClient.execute();

    return response.json(listClients);
  }
}