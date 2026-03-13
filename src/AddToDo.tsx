export default function AddToDo (props :any) {
    return (
        <section className="add__todo-wrapper">
            <form action={props.addToDo}>
                <label htmlFor="add-todo" className="add__todo-title">Add to do item here</label>
                    <div className="add__todo-bar">
                        <input type="text" name="todo-item" id="add-todo" className="add__todo-text"></input>
                        <button type="submit" className="add__todo-button">+</button>
                    </div>
            </form>
        </section>
    )
}