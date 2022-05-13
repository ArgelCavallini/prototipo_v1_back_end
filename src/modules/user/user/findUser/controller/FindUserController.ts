import { Request, Response } from "express";
import { FindUserModel } from "../model/FindUserModel";

export class FindUserController {
  async handle(request: Request, response: Response){

    const findUser = new FindUserModel();
    const users = await findUser.execute();

    return response.json(users);
  }
}