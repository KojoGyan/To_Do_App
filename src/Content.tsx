import { useState } from "react"
import AddToDo from "./AddToDo"
import ShowToDo from "./ShowToDo"

interface ToDo {
    id: number
    item: string
    isCompleted: boolean
}

export default function Content () {
    const [toDos, setToDos] = useState<ToDo[]>([
        { id: 0, item: 'Wash my clothes', isCompleted: false },
        { id: 1, item: 'Brush my teeth', isCompleted: true }
    ])

    function handleCompletion(id: number) {
        setToDos(prev => prev.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    }

    function addToDo (formData : any){
        const item = formData.get("todo-item")
        setToDos(prev => item?[{id: prev.length, item: item, isCompleted: false}, ...prev]: prev)
    }

    return (
        <section className="todo__working-area">
            <AddToDo addToDo={addToDo}/>
            <ShowToDo toDos={toDos} handleCompletion={handleCompletion} />
        </section>
    )
}