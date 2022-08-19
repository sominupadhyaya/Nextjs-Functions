import { useState } from "react"
import {v4 as uuidv4} from "uuid"
const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [inpData, setInpData] = useState("")
    
    const handleChange = e => setInpData(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        setTodos([...todos , inpData])
    }


    const handleDelete = () => setTodos([])
    return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} />

    <button>Submit</button>

    {
        todos.map((todo) =>{
            return(
                <div key={uuidv4()}>
                    <li>{todo}</li>
                </div>
            )
        })
    }
    </form>
    <button onClick={handleDelete}>Delete All</button>
    </>
  )
}

export default TodoList