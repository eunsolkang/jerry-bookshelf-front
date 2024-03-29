export type RequestBook = {
    name: string,
    author: string,
    imageUrl: string,
    backgroundColor: string,
    report: string,
    rating: number
}
export type Book = {
    id: string;
    name: string;
    imageUrl: string;
    author: string;
    rating: number;
    report?: string;
    backgroundColor: string
}