import cors from "cors";
import express, { Request, Response } from "express";
import { Result } from "shared";
import { routes } from "./routes";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (_: Request, res: Response) => {
  const result: Result = {
    ok: true,
  };
  res.json(result);

  console.log(routes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
