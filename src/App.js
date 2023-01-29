import React,{useState} from 'react';
import Form from './components/Form';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const[inputText,setInputText]=useState("");
  const[todos,setTodos] =  useState([]);
  return (
    <div className="App">
      <header>
        <h1>The 5am Club #to do list</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText}todos={todos} setTodos={setTodos} />
      <TodoList/>
    </div>
  );
}

export default App;
