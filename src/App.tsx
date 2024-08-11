import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo'

function App() {
  const todos = [
    new Todo('React'),
    new Todo('Typescript')
  ]

  return (
    <div>
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
}

export default App;