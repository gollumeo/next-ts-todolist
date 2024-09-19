import { useTodos } from "@/app/hooks/useTodos";
import { AddTodoForm } from "@/app/components/AddTodoForm";
import { Todo } from "@/app/interfaces/Todo";
import { TodoItem } from "@/app/components/TodoItem";

export const TodoList = () => {
    const { todoList, addTodo, toggleTodo, removeTodo } = useTodos();

    return (
        <>
            <AddTodoForm onAdd={addTodo} />
            {todoList.todos.map((todo: Todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onRemove={removeTodo}
                />
            ))}
        </>
    );
};