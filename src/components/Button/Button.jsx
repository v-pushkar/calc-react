import React from "react";
import classNames from "classnames";

export const Button = (props) => {
  const { label, onClick, className, value, type, disabled } = props;
  const classes = classNames("btn", { [className]: className });

  return (
    <div className="btn-wrap" data-testid="button">
      <button
        className={classes}
        onClick={onClick}
        value={value}
        data-type={type}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};
