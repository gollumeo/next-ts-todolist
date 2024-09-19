import React, {useState} from "react";
import {AddTodoProps} from "@/app/interfaces/AddTodoProps";

export const AddTodoForm = ({onAdd}: AddTodoProps) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim()) {
            onAdd(title.trim());
            setTitle('');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-1/3 items-center gap-2 bg-slate-600 p-4 rounded-lg"
        >
            <input type="text"
                   className="rounded-[5px] px-2 py-0.5 text-slate-800 placeholder:text-slate-600"
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
                   placeholder="Add a new todo"
            />
            <button
                type="submit"
                className="border px-2 py-1 bg-emerald-400 border-emerald-500 text-emerald-800 font-medium rounded-lg"
            >
                Add Todo
            </button>
        </form>
    )
}