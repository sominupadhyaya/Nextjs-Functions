import {useEffect , useState} from "react"


const Counter = () =>{
    const [time, setTime] = useState(0)
    const [running , setRunning] = useState(true)

    useEffect(() =>{
        if(running){
            const interval = setInterval(() =>{
                setTime(t => t+0.1)
            } , 100)
            return () => clearInterval(interval)
        }else{
            setTime(time)
        }
        } , [running])

    return (
        <div>
            Counter Example
            <h2>{time.toFixed()}</h2>
            <button onClick={() => setRunning(false)}>Stop Counter</button>
            <button onClick={() => setRunning(true)}>Start Counter</button>
        </div>
    )
}

export default Counter