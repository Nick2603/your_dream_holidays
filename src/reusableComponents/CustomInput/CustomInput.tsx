import React, { FC } from "react";

interface ICustomInput {
  required?: boolean;
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  eventHandler?: React.ChangeEventHandler<HTMLInputElement>;
}

export const CustomInput: FC<ICustomInput> = (props) => {
  return (
    <input
      required={props.required}
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.eventHandler}
    />
  );
};
