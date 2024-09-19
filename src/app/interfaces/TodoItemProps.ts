import {Todo} from "@/app/interfaces/Todo";

export interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}
