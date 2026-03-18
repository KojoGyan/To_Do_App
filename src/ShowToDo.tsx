import type { ToDo } from "./Content"

interface showToDoProps {
    toDos: ToDo[]
    handleCompletion: (id: number)=>void
    handleMoreOptions: (id: number)=>void
}

export default function ShowToDo (props :showToDoProps) {
    const toDosEl = props.toDos.map((toDo :ToDo) => {return (
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
            <div className="todo-item__more__options__button" onClick={()=>props.handleMoreOptions(toDo.id)}>
            </div>
            <div className={toDo.moreOptionsToggled?"shown":"hidden"}>
                <button className="more__options__button more__options__button--edit">Edit</button>
                <button className="more__options__button more__options__button--delete">Delete</button>
            </div>
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