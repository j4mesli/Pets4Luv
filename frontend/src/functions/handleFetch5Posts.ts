import { Post } from "../types/Post.model";

export const handleFetch5Posts = async (url: string, offset: number): Promise<Post[] | undefined> => {
    try {
        const response = await fetch(url + `?offset=${ offset }`);
        const data = await response.json();
        if (!data.error) {
            // sorted in descending order by ID (newest first)
            const sortedData = data.sort((a: Post, b: Post) => b.id! - a.id!);
            return sortedData;
        }
        else    
            return undefined;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};