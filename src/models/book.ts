export type RequestBook = {
    name: string,
    author: string,
    image_url: string,
    background_color: string,
    report: string,
}
export type Book = {
    uuid: string;
    id: string;
    name: string;
    image_url: string;
    rating: number;
    report: string;
    background_color: string
}