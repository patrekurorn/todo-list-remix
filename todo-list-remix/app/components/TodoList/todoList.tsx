import { useState, useEffect, useContext } from "react";
import { TodoListsContext } from "~/contexts/TodoListsContext";
import { FaTrashAlt } from 'react-icons/fa';
import { getCurrentDate } from '~/helpers/getCurrentDate';

interface TodoListInterface {
  id: number;
}

const TodoList = ({ id }: TodoListInterface) => {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("A");
  const {todoLists} = useContext(TodoListsContext);

  const showPosition = (position: any) => {
    const userLocation = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    todoLists[id].location = userLocation;
  }

  const showError = (error: any) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        todoLists[id].location = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        todoLists[id].location = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        todoLists[id].location = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        todoLists[id].location = "An unknown error occurred.";
        break;
    }
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      // Gets the longitude and latitude of the user
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
  }

  const addNewTodoListItem = () => {
    if (input !== "") {
      todoLists[id].todoListItems.push({
        name: input,
        date: getCurrentDate(),
        checked: false,
        priority: priority,
        location: getLocation(),
      })
      setInput("");
      setPriority("A");
    }
  }

  const removeFromTodoList = (currentTodoListItem: any) => {
    // This is a little buggy, you have to write in the input field in order to make
    // the item disappear from the screen, but it does remove it from the list
    let newList = todoLists[id].todoListItems.filter(function(item: any) {
      return item !== todoLists[id].todoListItems[currentTodoListItem]
    })
    todoLists[id].todoListItems = newList;
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

  useEffect(() => {
    // Only get the location of the user when it's a new todo list
    if (!todoLists[id].location) {
      getLocation();
    }
  })

  return (
    <div className="todolist-items-container">
      <h2>{todoLists[id].name}</h2>
      <h5>{todoLists[id].location ? todoLists[id].location : ""}</h5>
      <div className="todolist-item-container">
        <div className="add-todoitems-container">
          <input className="input-field" placeholder="Enter name of task" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <select className="priority" name="priority" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <button className="add-button" onClick={() => addNewTodoListItem()}><p className="add-button-text">Add task</p></button>
        </div>
        <div className="todolists">
          {
            todoLists[id].todoListItems.sort(sortTodoList).map((item: any) => {
              return (
                <div className="todolist-item" key={todoLists[id].todoListItems.indexOf(item)}>
                  <input defaultChecked={checked(todoLists[id].todoListItems.indexOf(item))} className="checkbox" type="checkbox" onClick={(e) => handleCheck(e, todoLists[id].todoListItems.indexOf(item))}/>
                  <p className="task-name">{item.priority} - {item.name}</p>
                  <p className="date-added">{item.date}</p>
                  <button onClick={() => removeFromTodoList(todoLists[id].todoListItems.indexOf(item))} className="delete-button"><FaTrashAlt className="delete-icon"/></button>
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