export interface Board {
    id: string;
    title: string; //defaults to full date added
    category: string; //defaults to date (day) added
    date: Date;
    img: string;
    raw?: string;
    text: string[];
}