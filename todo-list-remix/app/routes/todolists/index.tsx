import { useContext, useState } from "react";
import { Link } from "@remix-run/react";
import { TodoListItem } from "~/components/TodoListItem/todoListItem";
import { TodoListsContext } from "~/contexts/TodoListsContext";

const TodoListsIndex = () => {
  const {todoLists, setTodoLists} = useContext(TodoListsContext);
  const [input, setInput] = useState("");

  const addNewTodoList = () => {
    if (input !== "") {
      setTodoLists((oldTodoLists: any) => [...oldTodoLists, input])
      setInput("");
    }
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="todolists-container">
        <div className="add-todoitems-container">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={() => addNewTodoList()}>Add Todo list</button>
        </div>
        <div className="todolists">
          {
            todoLists.map(item => {
              return (
                <Link to={todoLists.indexOf(item).toString()} key={todoLists.indexOf(item).toString()}>
                  <TodoListItem name={item} id={todoLists.indexOf(item)} />
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default TodoListsIndex;
