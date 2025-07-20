import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();
const port = 3000;

app.use(cors());

routes(app);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
