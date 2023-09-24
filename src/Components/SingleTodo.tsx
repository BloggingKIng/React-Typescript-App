import React from "react";
import { TodoTemplate } from "./TodoModel";
import {AiFillDelete, AiFillEdit, AiOutlineCheck} from 'react-icons/ai';

interface Props {
    todo:TodoTemplate,
    todos: TodoTemplate[],
    setTodos:React.Dispatch<React.SetStateAction<TodoTemplate[]>>
}

export const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}:Props) => {

    const [edit, setEdit] = React.useState<boolean>(false);
    const [editText, setEditText] =  React.useState<string>(todo.todo);

    const handleDone = (id:number) => {
        setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:true}:todo))
    }

    const handleDelete = (id:number)=> {
        setTodos(todos.filter((todo)=>todo.id!==id))
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault();
        setTodos(todos.map((todo)=>(todo.id===id?{...todo, todo:editText}:todo)))
        setEdit(false);
    }
    return (
        <form className="todos__single" onSubmit={(e)=>handleEdit(e,todo.id)}>
            {edit?(<input value={editText} onChange={(e)=>setEditText(e.target.value)} className="todos__single--text"/>):(
                todo.isDone?(<s className="todos__single--text">{todo.todo}</s>):
                (<span className="todos__single--text">{todo.todo}</span>)
            )}
            <div>
            <span className="icon" onClick={()=>{
                if (!edit && !todo.isDone){
                    setEdit(!edit);
                }
            }}><AiFillEdit /></span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}><AiFillDelete /></span>
            <span className="icon" onClick={()=>handleDone(todo.id)}><AiOutlineCheck /></span>
            </div>

        </form>
    );
}