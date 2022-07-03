
const TodoListItem = (item: any) => {

  return (
    <div className="todolist-item">
      <input id="checkbox" className="checkbox" type="checkbox" />
      <p>{item}</p>
      <p className="date-added"></p>
    </div>
  )
}

export { TodoListItem };