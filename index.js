"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
https_1.default
    .createServer({
    key: fs_1.default.readFileSync("ssl/localhost.key"),
    cert: fs_1.default.readFileSync("ssl/localhost.crt"),
}, app)
    .listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
app.get("/", (req, res) => {
    res.send("welcome");
});
app.post("/webhook", (req, res) => {
    const validationToken = req.query.validationToken;
    res.setHeader("Content-Type", "text/plain");
    res.status(200);
    res.send(validationToken);
});
