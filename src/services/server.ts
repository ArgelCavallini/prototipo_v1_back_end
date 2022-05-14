import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import { routes } from "../routes/index";

const app = express();

// habilitado para qualquer origem
app.use(cors());

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
})

app.listen(4000, () => console.log("Deu boa..."))