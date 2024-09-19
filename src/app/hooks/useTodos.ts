import { useState, useEffect } from "react";
import { TodoList } from "@/app/interfaces/Todo";
import { TodoStorage } from "@/app/services/todoStorage";

export const useTodos = () => {
    const [todoList, setTodoList] = useState<TodoList>({ todos: [] });

    useEffect(() => {
        setTodoList(TodoStorage.getAll());
    }, []);

    const addTodo = (title: string) => {
        TodoStorage.add({
            id: TodoStorage.getLastTodoId() + 1,
            title,
            isDone: false
        });
        setTodoList(TodoStorage.getAll());
    };

    const toggleTodo = (id: number) => {
        TodoStorage.toggle(id);
        setTodoList(TodoStorage.getAll());
    };

    const removeTodo = (id: number) => {
        TodoStorage.remove(id);
        setTodoList(TodoStorage.getAll());
    };

    return { todoList, addTodo, toggleTodo, removeTodo };
};