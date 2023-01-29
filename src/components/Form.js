import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault(e.target.value);

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

    const statusHandler = (e) => {
      console.log(e.target.value);
    }

  return (
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select className="filter-todo" name="todos" onChange={statusHandler}>
            <option value="all">ALL</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">UnCompleted</option>
          </select>
        </div>
      </form>
  );
};

export default Form;
