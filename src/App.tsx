import React, { useState } from 'react';
import './App.css';
import { InputField } from './Components/InputField';
import { TodoTemplate } from './Components/TodoModel';
import { TodoList } from './Components/TodoList';

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoTemplate[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if (todo){setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);setTodo("")}
  };

  return (
    <div className="App">
      <span className='heading'>
        Taskify App
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
