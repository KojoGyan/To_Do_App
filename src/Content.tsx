import { useState } from "react"
import AddToDo from "./AddToDo"
import ShowToDo from "./ShowToDo"

export interface ToDo {
    id: number
    item: string
    isCompleted: boolean
    moreOptionsToggled: boolean
    edittingTriggered: boolean
}

const DefaultTriggers: Pick<ToDo, 'moreOptionsToggled' | 'edittingTriggered'> = {
    moreOptionsToggled: false,
    edittingTriggered: false
}

export default function Content () {
    const [toDos, setToDos] = useState<ToDo[]>([
        { id: 0, item: 'Wash my clothes', isCompleted: false, ...DefaultTriggers },
        { id: 1, item: 'Brush my teeth', isCompleted: true, ...DefaultTriggers}
    ])

    function handleCompletion(id: number) {
        setToDos(prev => prev.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    }
    
    function addToDo (formData : any){
        const item = formData.get("todo-item")
        setToDos(prev => item?[{id: prev.length, item: item, isCompleted: false, ...DefaultTriggers}, ...prev]: prev)
    }
    
    function handleMoreOptions (id: number){
        setToDos(prev => prev.map(todo => todo.id === id ? { ...todo, moreOptionsToggled: !todo.moreOptionsToggled } : todo))
        
    }

    return (
        <section className="todo__working-area">
            <AddToDo addToDo={addToDo}/>
            <ShowToDo toDos={toDos} handleCompletion={handleCompletion} handleMoreOptions={handleMoreOptions} />
        </section>
    )
}