'use client'
import {TodoList} from "@/app/components/TodoList";

export default function Home() {
    return (
        <main className='text-slate-50 flex flex-col items-center w-4/5 mt-4 gap-8'>
            <h1 className="text-5xl font-bold text-center">My Todo List</h1>
            <TodoList />
        </main>
    );
}
