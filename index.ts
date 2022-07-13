import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const notifications: Response[] = [];


app.get("/", (req: Request, res: Response) => {
  res.send(notifications);
});

app.post("/webhook", (req: Request, res: Response) => {
  console.log("request: ", req);
  notifications.push(res);
  const validationToken = req.query.validationToken;
  res.setHeader("Content-Type", "text/plain");
  res.status(200);
  res.send(validationToken);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});