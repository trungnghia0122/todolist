export function TodoCard(props) {
  const { handleComplete, handleDelete, todo, todoIndex } = props

  return (
    <div className='card todo-item'>
      <p>{todo.input}</p>
      <div className='todo-buttons'>
        <button
          onClick={() => {
            return handleComplete(todoIndex)
          }}
          disabled={todo.completed}
        >
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            return handleDelete(todoIndex)
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}
