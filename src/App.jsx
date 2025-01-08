import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([{ input: "go to gym", completed: true }])
  const [selectedTab, setSelectedTabs] = useState("Open")

  function handleAddTodo(newTodo) {
    const newList = [...todos, { input: newTodo, completed: false }]
    setTodos(newList)
  }

  function handleComplete(index) {
    const newList = [...todos]
    const completedTodo = newList[index]
    completedTodo["completed"] = true
    newList[index] = completedTodo
    setTodos(newList)
  }

  function handleDelete(index) {
    const newList = todos.filter((todo, i) => i !== index)
    setTodos(newList)
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTabs={setSelectedTabs}
        todos={todos}
      />
      <TodoList
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
