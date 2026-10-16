export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export type User = {
    id: number;
    name: string;
    email: string;
};

export type Theme = 'light' | 'dark';

export type Message = {
    id: string;
    text: string;
};
