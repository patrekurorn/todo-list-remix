import { useState, useEffect, useContext } from "react";
import { TodoListsContext } from "~/contexts/TodoListsContext";

interface TodoListInterface {
  id: number;
}

const TodoList = ({ id }: TodoListInterface) => {
  const [currentTodoList, setCurrentTodoList] = useState("");
  const {todoLists} = useContext(TodoListsContext);

  useEffect(() => {
    setCurrentTodoList(todoLists[id]);
  })

  return (
    <div>{currentTodoList}</div>
  )
}

export { TodoList };