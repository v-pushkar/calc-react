import React from "react";

export const Input = ({ type, name, value, onChange, readonly }) => {
  return (
    <div className="input-wrapp">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readonly}
      ></input>
    </div>
  );
};
