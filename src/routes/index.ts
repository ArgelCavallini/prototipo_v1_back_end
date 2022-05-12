import { Router } from "express";

import { CreateClientController } from "../modules/client/createClient/controller/CreateClientController";
import { FindClientController } from "../modules/client/findClient/controller/FindClientController";
import { DeleteClientController } from "../modules/client/deleteClient/controller/DeleteClientController";

const routes = Router();

const createClientController = new CreateClientController
const findClientController = new FindClientController
const deleteClientController = new DeleteClientController

routes.post("/client", createClientController.handle);
routes.get("/client", findClientController.handle);
routes.delete("/client/:id", deleteClientController.handle);

export { routes }