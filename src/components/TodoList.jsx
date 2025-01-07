import { TodoCard } from "./TodoCard"

export function TodoList(props) {
  const { selectedTab, todos } = props

  const tab = selectedTab
  const filterTodosList =
    tab === "All"
      ? todos
      : tab === "Open"
      ? todos.filter((todo) => !todo.completed)
      : tab === "Completed" && todos.filter((todo) => todo.completed)

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todo={todo} />
      })}
    </>
  )
}
