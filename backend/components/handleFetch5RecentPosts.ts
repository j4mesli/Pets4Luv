import { Request, Response } from "express";
import { database } from "../Firebase/config";
import { Post } from "../types/Post.model";

export const handleFetch5RecentPosts = (req: Request, res: Response) => {
    // Get a reference to the database
    const dbRef = database;
    if (req.query.offset) {
        const offset = +req.query.offset;
        // Fetch the most recent object from the database
        dbRef.ref("posts").limitToLast(5+offset*5).once('value', (snapshot) => {
            const data = snapshot.val();
            // Filter out null values and store them in a new array
            const filteredData = data.filter((post: Post) => post);
            // Create an array to store the entries with their IDs
            const responseWithIds = filteredData.map((post: Post) => {
                return { ...post, id: data.indexOf(post) };
            });
            res.status(200).send(responseWithIds);
        });
        
    }
    else {
        res.status(400).send({ error: "No offset provided" });
    }
}