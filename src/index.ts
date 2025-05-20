import "dotenv/config";
import app from "./app";
import { Request, Response } from "express";


const { PORT } = process.env || 8000;

app.get("/", (_req: Request, res: Response) => {
    res.json({ success: true, message: "From backend!" })
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});