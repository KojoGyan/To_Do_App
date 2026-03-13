
export default function ShowToDo (props :any) {
    
    const toDosEl = props.toDos.map((toDo :any) => {return (
        <div className="todo__item" key={toDo.id}>
            <label className={toDo.isCompleted? "todo__item-text todo--completed": "todo__item-text"}>
                <input 
                type="checkbox" 
                name="isDone" id={`todo-item-${toDo.id}`} 
                className="todo__item-checkbox" 
                checked={toDo.isCompleted?true:false}
                onClick={()=>props.handleCompletion(toDo.id)}
                readOnly
                ></input>
                {toDo.item}
            </label>
            <div className="todo-item__more__options"></div>
        </div>)
    })
    return (
        <section className="list__todo">
            <div className="todo__list-wrapper">
                {toDosEl}
            </div>
        </section>
    )
}