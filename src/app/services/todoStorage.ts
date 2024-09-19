import {Todo, TodoList} from "@/app/interfaces/Todo";

export const TodoStorage = {
    getAll: (): TodoList => {
        const todos = localStorage.getItem('todos');
        return { todos: todos ? JSON.parse(todos) : [] }
    },

    add: (todo: Todo): void => {
        const todoList = TodoStorage.getAll();
        todoList.todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todoList.todos));
    },

    getTodo: (id: number): Todo | undefined => {
        const todoList = TodoStorage.getAll();
        return todoList.todos.find(t => t.id === id);
    },

    toggle: (id: number): void => {
        const todoList = TodoStorage.getAll();
        const todoIndex = todoList.todos.findIndex(t => t.id === id);
        if (todoIndex !== -1) {
            todoList.todos[todoIndex].isDone = !todoList.todos[todoIndex].isDone;
            localStorage.setItem('todos', JSON.stringify(todoList.todos));
        }
    },

    remove: (id: number): void => {
        const todoList = TodoStorage.getAll();
        todoList.todos = todoList.todos.filter(t => t.id !== id);
        localStorage.setItem('todos', JSON.stringify(todoList.todos));
    },

    getLastTodoId: (): number => {
        const todoList = TodoStorage.getAll();
        return todoList.todos.length ? todoList.todos[todoList.todos.length - 1].id : 0;
    }
}