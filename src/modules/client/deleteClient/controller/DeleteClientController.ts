import { Request, Response } from "express";
import { DeleteClientModel } from "../model/DeleteClientModel";

export class DeleteClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteClient = new DeleteClientModel();
    const result = await deleteClient.execute(id)

    return response.json(result);
  }
}