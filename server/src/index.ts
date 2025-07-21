import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/errorhandler";
import { routes } from "./routes";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
routes(app);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
