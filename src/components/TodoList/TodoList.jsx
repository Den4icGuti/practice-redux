import TodoItem from "components/TodoItem";
import { useSelector } from "react-redux";

const TodoList = ({ removeTodo }) => { 
  const todos = useSelector(state => state.todos.todos)
  return (
    <ul>
      {todos.map(todo => <TodoItem
        key={todo.id}
        removeTodo={removeTodo}
        {...todo}
      />)}
    </ul>
  )
}

export default TodoList;