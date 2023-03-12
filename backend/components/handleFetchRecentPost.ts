import { Request, Response } from "express"
import { database } from "../Firebase/config";
import { Post } from "../types/Post.model";

export const handleFetchRecentPost = async (req: Request, res: Response) => {
    // Get a reference to the database
    const dbRef = database;

    // Fetch the most recent object from the database
    dbRef.ref("posts").limitToLast(1).once('value', (snapshot) => {
        const data = snapshot.val();
        // this is necessary because the data does get the most recent post but it gets the other ones' indices too, 
        // all the other ones are just null.
        const response = data.filter((post: Post) => post)[0];
        const resId = data.length-1;
        res.status(200).send({ ...response, id: resId });
    });
}