import express, { Request, Response } from "express";
import cors from "cors";
import { handleFetchRecentPost } from "../components/handleFetchRecentPost";

// init server
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// routes
app.get("/", (req: Request, res: Response) => res.status(200).send("Hello World!"));

// fetch most recent post
app.get("/recentPost", (req: Request, res: Response) => handleFetchRecentPost(req, res));