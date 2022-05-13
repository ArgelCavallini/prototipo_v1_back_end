import { Request, Response } from "express";
import { AuthenticateUserModel } from "../model/AuthenticateUserModel";


export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateUser = new AuthenticateUserModel();
    const result = await authenticateUser.execute({
      username,
      password,
    })

    return response.json(result);
  }
}