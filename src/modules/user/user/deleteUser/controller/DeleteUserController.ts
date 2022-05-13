import { Request, Response } from "express";
import { DeleteUserModel } from "../model/DeleteUserModel";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteUser = new DeleteUserModel();
    const result = await deleteUser.execute(id)

    return response.json(result);
  }
}