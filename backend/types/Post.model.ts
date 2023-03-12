export interface Post {
    body: string;
    date: string;
    image: string | Blob;
    title: string;
    id?: number
}