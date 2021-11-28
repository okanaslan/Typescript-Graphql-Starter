import { Server } from "./server";
import { config } from "dotenv";

config();
const port = parseInt(process.env["NODE_PORT"] ?? "5000");

Server.start(port);
