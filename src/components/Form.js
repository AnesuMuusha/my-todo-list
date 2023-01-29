import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
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
  return (
    <div>
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
          <select className="filter-todo" name="todos">
            <opton valvue="all">ALL</opton>
            <opton valvue="completed">Completed</opton>
            <opton valvue="uncompleted">UnCompleted</opton>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
