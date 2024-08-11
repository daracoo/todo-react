import { useRef } from "react";

const NewTodo: React.FC<{onAddToDo: (text: string) => void }> = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => { // since it's for form we use FormEvent, if we have onClick -> MouseEvent
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value

        if(enteredText?.trim().length === 0){
            return;
        }

        props.onAddToDo(enteredText);
    }

    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;