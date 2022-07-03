interface TodoListProps {
  name: string;
  date: string;
}

const SingleTodoList = ({ name, date }: TodoListProps) => {

  return (
    <div className="todolist-container">
      <p>{name}</p>
      <p className="date-added">{date}</p>
    </div>
  )
}

export { SingleTodoList };