interface TodoListProps {
  name: string;
  id: number;
}

const TodoListItem = ({ name, id }: TodoListProps) => {

  return (
    <div className="todolist-container">
      {name} - {id}
    </div>
  )
}

export { TodoListItem };