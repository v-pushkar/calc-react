import React from "react"

export const Input =({type, name, value,onChange})=>{
    return(
        <div className="input-wrapp">
            <input type={type} name={name} value={value} onChange={onChange}></input>
        </div>
    )
}