import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo'

function App() {
  const todos = [
    new Todo('React'),
    new Todo('Typescript')
  ]

  const addTodoHandler = (todoText: string) => {

  }

  return (
    <div>
      <NewTodo onAddToDo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;