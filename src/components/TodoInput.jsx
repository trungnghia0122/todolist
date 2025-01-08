import { useState } from "react"

export function TodoInput(props) {
  const { handleAddTodo } = props
  const [input, setInput] = useState("")

  return (
    <div className='input-container'>
      <input
        placeholder='Add task'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        disabled={!input}
        onClick={() => {
          handleAddTodo(input)
          setInput("")
        }}
      >
        <i className='fa-solid fa-plus'></i>
      </button>
    </div>
  )
}
