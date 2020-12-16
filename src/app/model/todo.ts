
/*
    model for each todo item
*/


export interface Todo {
    id: string;
    title: string;
    description: string;
    isComplete: boolean;
    date: Date;
}