import { Request, Response } from "express";
import { database } from "../Firebase/config";

export const handleFetchSpecificPost = (req: Request, res: Response) => {
  // Get a reference to the database
  const dbRef = database;

  if (req.query.index) {
    const index = +req.query.index;

    // Fetch the post by index from the database
    dbRef.ref("posts").child(index.toString()).once('value', (snapshot) => {
      const data = snapshot.val();

      if (data) {
        // Add the index as the ID and return the data
        const responseData = { ...data, id: index };
        res.status(200).send(responseData);
      } else {
        res.status(404).send({ error: "Post not found" });
      }
    });
  } else {
    res.status(400).send({ error: "No index provided" });
  }
};
