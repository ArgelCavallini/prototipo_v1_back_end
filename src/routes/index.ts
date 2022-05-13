import { Router } from "express";

import { ensureAuthenticateUser } from "../middlewares/ensureAtuthenticateUser";

import { CreateUserController } from "../modules/user/user/createUser/controller/CreateUserController";
import { FindUserController } from "../modules/user/user/findUser/controller/FindUserController";
import { DeleteUserController } from "../modules/user/user/deleteUser/controller/DeleteUserController";

import { AuthenticateUserController } from "../modules/account/authenticateUser/controller/AuthenticateUserController";

import { CreateClientController } from "../modules/client/createClient/controller/CreateClientController";
import { FindClientController } from "../modules/client/findClient/controller/FindClientController";
import { DeleteClientController } from "../modules/client/deleteClient/controller/DeleteClientController";

const routes = Router();

const createUserController = new CreateUserController
const findUserController = new FindUserController
const deleteUserController = new DeleteUserController

const authenticateUserController = new AuthenticateUserController

const createClientController = new CreateClientController
const findClientController = new FindClientController
const deleteClientController = new DeleteClientController

routes.post("/user", createUserController.handle);
routes.get("/user", findUserController.handle);
routes.delete("/user/:id", ensureAuthenticateUser, deleteUserController.handle);

routes.post("/authenticate_user", authenticateUserController.handle);

routes.post("/client", createClientController.handle);
routes.get("/client", findClientController.handle);
routes.delete("/client/:id", deleteClientController.handle);

export { routes }