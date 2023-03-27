import './App.css';


function App() {

  return (
    <div className="main">
      <h1>Lista de Tarefas</h1>

      <form>
        <input type="text" />
        <button type="submit">Add</button>
      </form>

      <div className="tarefas">
        <div className="item">
          <span>Estudar Javascript</span>
          <button>X</button>
        </div>

        <div className="itemCompleto">
          <span>Estudar Node.js</span>
          <button>X</button>
        </div>
      </div>
    </div>
  )
}

export default App
