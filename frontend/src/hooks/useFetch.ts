import { Post } from "../types/Post.model";

export const useFetch = async (url: string): Promise<Post | undefined> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data['error'] ? undefined : data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};