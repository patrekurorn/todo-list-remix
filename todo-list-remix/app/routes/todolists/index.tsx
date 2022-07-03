import { useContext, useState } from "react";
import { Link } from "@remix-run/react";
import { SingleTodoList } from "~/components/SingleTodoList/singleTodoList";
import { TodoListsContext } from "~/contexts/TodoListsContext";
import { FaTrashAlt } from 'react-icons/fa';
import { getCurrentDate } from "~/helpers/getCurrentDate";

const TodoListsIndex = () => {
  const {todoLists, setTodoLists} = useContext(TodoListsContext);
  const [input, setInput] = useState("");

  const addNewTodoList = () => {
    if (input !== "") {
      setTodoLists((oldTodoLists: any) => [...oldTodoLists, {
        name: input,
        location: "",
        date: getCurrentDate(),
        todoListItems: []
      }])
      setInput("");
    }
  }

  const removeFromTodoLists = (currentTodoList: any) => {
    setTodoLists(todoLists.filter(function(item: any) {
      return item !== todoLists[currentTodoList];
    }))
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="todolists-container">
        <div className="add-todoitems-container">
          <input className="input-field" placeholder="Enter name of todo list" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="add-button" onClick={() => addNewTodoList()}><p className="add-button-text">Add Todo list</p></button>
        </div>
        <div className="todolists">
          {
            todoLists.map((item: any) => {
              return (
                <div className="todolists-item">
                  <Link to={todoLists.indexOf(item).toString()} key={todoLists.indexOf(item).toString()} style={{textDecoration:"none", color:"black"}}>
                    <SingleTodoList name={item.name} date={item.date} />
                  </Link>
                  <button className="delete-button" onClick={() => removeFromTodoLists(todoLists.indexOf(item))}><FaTrashAlt className="delete-icon"/></button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default TodoListsIndex;
