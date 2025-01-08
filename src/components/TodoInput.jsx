import { useState } from "react"

export function TodoInput(props) {
  const { todos, handleAddTodo } = props
  const [input, setInput] = useState("")

  return (
    <div className='input-container'>
      <input
        placeholder='Add task'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        disabled={!input || todos.some((t) => t.input === input)}
        onClick={() => {
          if (input) handleAddTodo(input)
          setInput("")
        }}
      >
        <i className='fa-solid fa-plus'></i>
      </button>
    </div>
  )
}
