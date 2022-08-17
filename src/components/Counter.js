import React from "react";
import { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const [pole, setPole] = useState('Initial value')

    const inc = () => {
        setCount(count +1);
    }

    const dec = () => {
        setCount(count -1);
    }

    return (
        <div>
            <h1 style={{color: "red"}}>{count}</h1>
            <h2>{pole}</h2>
            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>
            <input onChange={(e) => setPole(e.target.value+props.name)} type="text" name="input" value={pole}/>
        </div>
        
    )
}

export default Counter;