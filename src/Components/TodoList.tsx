import React from "react";
import '../styles.css'
import { TodoTemplate } from "./TodoModel";
import { SingleTodo } from "./SingleTodo";

interface Props {
    todos: TodoTemplate[],
    setTodos: React.Dispatch<React.SetStateAction<TodoTemplate[]>>
}

export const TodoList:React.FC<Props> = ({todos,setTodos}:Props) => {
    return (
        <div className="">
            {
                todos.map((todo)=>(
                    <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
                ))
            }
        </div>
    )
}