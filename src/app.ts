import { config } from "dotenv";
config();

import { Server } from "./server";

const port = parseInt(process.env["NODE_PORT"] ?? "5000");
const host = process.env["NODE_HOST"];

export const app = new Server("events", port, host);

app.start();
