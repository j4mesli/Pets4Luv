import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { handleFetchRecentPost } from "../components/handleFetchRecentPost";
import { handleFetch5RecentPosts } from "../components/handleFetch5RecentPosts";
import { handleFetchSpecificPost } from "../components/handleFetchSpecificPost";

// init server
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
// middleware
app.use(morgan('dev'));

// routes
app.get("/", (req: Request, res: Response) => res.status(200).send("Hello World!"));

// fetch most recent post
app.get("/recentPost", (req: Request, res: Response) => handleFetchRecentPost(req, res));

// get 5 most recent posts
app.get("/get5Posts", (req: Request, res: Response) => handleFetch5RecentPosts(req, res));

// fetch specific post by index
app.get("/getSpecificPost", (req: Request, res: Response) => handleFetchSpecificPost(req, res));