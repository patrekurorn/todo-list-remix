import { createContext, useState, FunctionComponent } from "react";

interface TodoListsContextInterface {
  todoLists: string[];
  setTodoLists: (i: any) => void;
}

const TodoListsContext = createContext({} as TodoListsContextInterface);

const TodoListsProvider: FunctionComponent = ({
  children,
}) => {
  const [todoLists, setTodoLists] = useState([]);

  return (
    <TodoListsContext.Provider value={{todoLists, setTodoLists}}>
      {children}
    </TodoListsContext.Provider>
  )
}

export {TodoListsContext, TodoListsProvider};