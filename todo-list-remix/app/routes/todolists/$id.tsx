import { useParams } from "@remix-run/react";
import { TodoList } from "~/components/TodoList/todoList";

const TodoListIndex = () => {
  const { id } = useParams() as any;
  
  return (
    <div>
      <TodoList id={parseInt(id)} />
    </div>
  )
}

export default TodoListIndex;