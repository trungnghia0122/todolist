import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"
import { useState, useEffect } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [selectedTab, setSelectedTabs] = useState("Open")

  function handleAddTodo(newTodo) {
    const newList = [...todos, { input: newTodo, completed: false }]
    setTodos(newList)
    handleSaveData(newList)
  }

  function handleComplete(index) {
    const newList = [...todos]
    const completedTodo = newList[index]
    completedTodo["completed"] = true
    newList[index] = completedTodo
    setTodos(newList)
    handleSaveData(newList)
  }

  function handleDelete(index) {
    const newList = todos.filter((todo, i) => i !== index)
    setTodos(newList)
    handleSaveData(newList)
  }

  function handleSaveData(currentList) {
    localStorage.setItem("todo-app", JSON.stringify(currentList))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return
    const db = JSON.parse(localStorage.getItem("todo-app"))
    setTodos(db)
  }, [])

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
      <TodoInput todos={todos} handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
