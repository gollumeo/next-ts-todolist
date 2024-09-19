import { TodoItemProps } from "@/app/interfaces/TodoItemProps";

export const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
    return (
        <div className="flex items-center justify-between p-2 border-b w-full">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => onToggle(todo.id)}
                    className="mr-2"
                />
                <span className={todo.isDone ? 'line-through' : ''}>
                    {todo.title}
                </span>
            </div>
            <button
                className="bg-rose-400 border border-rose-500 px-2 py-1 rounded-lg text-rose-800 font-medium"
                onClick={() => onRemove(todo.id)}
            >
                Delete
            </button>
        </div>
    );
};