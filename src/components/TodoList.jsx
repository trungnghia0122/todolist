import { TodoCard } from "./TodoCard"

export function TodoList(props) {
  const { selectedTab, todos } = props

  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Open"
      ? todos.filter((todo) => !todo.completed)
      : selectedTab === "Completed" && todos.filter((todo) => todo.completed)

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todo={todo}
            todoIndex={todos.findIndex((t) => t.input === todo.input)}
            {...props}
          />
        )
      })}
    </>
  )
}
