import { useState, useEffect } from "react";
import { Todo, TodoList } from "@/app/interfaces/Todo";
import {TodoStorage} from "@/app/services/todoStorage";

export const useTodos = () => {
    const [todoList, setTodoList] = useState<TodoList>({todos: []});

    useEffect(() => {
        setTodoList(TodoStorage.getAll());
    }, []);

    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: TodoStorage.getLastTodoId() + 1,
            title,
            isDone: false,
        };
        TodoStorage.add(newTodo);
        setTodoList(TodoStorage.getAll());
    };

    const toggleTodo = (id: number) => {
        TodoStorage.toggle(id);
        setTodoList(TodoStorage.getAll());
    };

    const removeTodo = (id: number) => {
        TodoStorage.remove(id);
        setTodoList(TodoStorage.getAll());
    }

    return { todos: todoList, addTodo, toggleTodo, removeTodo };
}