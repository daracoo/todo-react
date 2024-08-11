import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => { // since it's for form we use FormEvent, if we have onClick -> MouseEvent
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value

        if(enteredText?.trim().length === 0){
            return;
        }

        todosCtx.addTodo(enteredText);
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;