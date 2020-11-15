import React from "react";
import classNames from "classnames";


export const Button = (props)=>{
    const {label, onClick, className, value, type} = props
    const classes = classNames(
        "btn",{className: className}
    )
 
    return (
        <div className="btn-wrap">
            <button className={classes} onClick={onClick} value={value} type={type}>{label}</button>
        </div>
    )
}