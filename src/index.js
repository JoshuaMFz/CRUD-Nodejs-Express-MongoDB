import express from "express";
import bodyParser from "body-parser";
import UserController from "./controllers/user";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/user", UserController);
app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
