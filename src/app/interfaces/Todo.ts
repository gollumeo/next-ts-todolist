export interface Todo {
    id: number;
    title: string;
    isDone: boolean;
}

export interface TodoList {
    todos: Todo[];
}