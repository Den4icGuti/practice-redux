import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "Redux/todoSlice";
import Form from "./Form";
import TodoList from "./TodoList";



export const App = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  
  const addTask = (e) => {
    e.preventDefault();

    if (text.trim() === '') { 
      alert('error');
      return;
    }
    dispatch(addTodo({ text }))
    setText('')
  };
  
  return (
    <>
      <Form
        handleSubmit={addTask}
        text={text}
        handleInput={setText}
      />
      <TodoList/>
    </>
  );
};
