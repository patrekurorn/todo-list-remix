import { useState, useEffect, useContext } from "react";
import { TodoListsContext } from "~/contexts/TodoListsContext";

interface TodoListInterface {
  id: number;
}

const TodoList = ({ id }: TodoListInterface) => {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("A");
  const {todoLists} = useContext(TodoListsContext);

  const getCurrentDate = () => {
    let today = new Date() as any;
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today;
  }

  const addNewTodoListItem = () => {
    if (input !== "") {
      todoLists[id].todoListItems.push({
        name: input,
        date: getCurrentDate(),
        checked: false,
        priority: priority,
      })
      setInput("");
      setPriority("A");
    }
  }

  const handleCheck = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, currentItem: any) => {
    if (todoLists[id].todoListItems[currentItem].checked === true) {
      todoLists[id].todoListItems[currentItem].checked = false
    } else {
      todoLists[id].todoListItems[currentItem].checked = true;
    }
  }

  const sortTodoList = (a: any, b: any) => {
    if (a.priority < b.priority) {
      return -1;
    }
    if (a.priority > b.priority) {
      return 1;
    }
    return 0;
  }
  
  const checked = (currentItem: any) => {
    if (todoLists[id].todoListItems[currentItem].checked) {
      return true;
    }
    return false;
  }

  return (
    <div className="todolist-items-container">
      <h2>{todoLists[id].name}</h2>
      <div className="todolist-item-container">
        <div className="add-todoitems-container">
          <input placeholder="Enter name of task" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <select name="priority" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <button onClick={() => addNewTodoListItem()}>Add item to Todo list</button>
        </div>
        <div className="todolists">
          {
            todoLists[id].todoListItems.sort(sortTodoList).map((item: any) => {
              return (
                <div className="todolist-item" key={todoLists[id].todoListItems.indexOf(item)}>
                  <input defaultChecked={checked(todoLists[id].todoListItems.indexOf(item))} className="checkbox" type="checkbox" onClick={(e) => handleCheck(e, todoLists[id].todoListItems.indexOf(item))}/>
                  <p>{item.priority} - {item.name}</p>
                  <p className="date-added">{item.date}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export { TodoList };