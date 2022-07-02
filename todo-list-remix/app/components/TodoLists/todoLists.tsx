import { Link, Outlet } from "@remix-run/react";
import { useState } from "react";
import { TodoList } from "../TodoListItem/todoListItem";

const TodoLists = () => {
  const [todoLists, setTodoLists] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addNewTodoList = () => {
    if (input !== "") {
      setTodoLists(oldTodoLists => [...oldTodoLists, input])
      setInput("");
    }
  }

  return (
    <div className="todolists-container">
      <div className="add-todoitems-container">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addNewTodoList()}>Add Todo list</button>
      </div>
      <div className="todolists">
        {
          todoLists.map(item => {
            return (
              <Link to={"todolist/" + todoLists.indexOf(item).toString()}>
                <TodoList name={item} id={todoLists.indexOf(item)} />
              </Link>
            )
          })
        }
      </div>
      <Outlet context={[todoLists]}/>
    </div>
  )
}

export { TodoLists };