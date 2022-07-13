import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.get("/", (req: Request, res: Response) => {
  res.send("welcome");
});

app.post("/webhook", (req: Request, res: Response) => {
  console.log("request: ", req);
  const validationToken = req.query.validationToken;
  res.setHeader("Content-Type", "text/plain");
  res.status(200);
  res.send(validationToken);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});