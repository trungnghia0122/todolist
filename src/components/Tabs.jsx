export function Tabs(props) {
  const { todos, selectedTab, setSelectedTabs } = props
  const tabs = ["All", "Open", "Completed"]

  return (
    <nav className='tab-container'>
      {tabs.map((tab, index) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((todo) => !todo.completed).length
            : tab === "Completed" &&
              todos.filter((todo) => todo.completed).length

        return (
          <button
            onClick={() => setSelectedTabs(tab)}
            className={`tab-button ${
              tab === selectedTab ? "tab-selected" : ""
            }`}
            key={index}
          >
            <h4>
              {tab}
              <span> ({numOfTasks})</span>
            </h4>
          </button>
        )
      })}

      <hr />
    </nav>
  )
}
