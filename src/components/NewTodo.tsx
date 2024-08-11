const NewTodo = () => {
    const submitHandler = (event: React.FormEvent) => { // since it's for form we use FormEvent, if we have onClick -> MouseEvent
        event.preventDefault();
    }

    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text"/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;