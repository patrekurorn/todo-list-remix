interface TodoListProps {
  name: string;
  id: number;
}

const SingleTodoList = ({ name, id }: TodoListProps) => {

  return (
    <div className="todolist-container">
      {name} - {id}
    </div>
  )
}

export { SingleTodoList };