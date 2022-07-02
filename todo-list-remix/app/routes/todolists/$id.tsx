import { useParams } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { TodoListsContext } from "~/contexts/TodoListsContext";
import { TodoList } from "~/components/TodoList/todoList";

const TodoListIndex = () => {
  const { id } = useParams() as any;
  const {todoLists} = useContext(TodoListsContext);
  const [currentTodoList, setCurrentTodoList] = useState("");
  
  useEffect(() => {
    setCurrentTodoList(todoLists[parseInt(id)]);
  })

  return (
    <div>
      <TodoList id={parseInt(id)} />
    </div>
  )
}

export default TodoListIndex;