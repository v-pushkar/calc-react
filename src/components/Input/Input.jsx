import React from "react";

export const Input = ({ type, name, value, onChange, readonly }) => {
  return (
    <div className="input-wrapp" data-testid="input-wrap">
      <input 
      data-testid="input"
        type={type}
        name={name}
        defaultValue={value}        
        // onChange={onChange}
        readOnly={readonly}
      ></input>
    </div>
  );
};
