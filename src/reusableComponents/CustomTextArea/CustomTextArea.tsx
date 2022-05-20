import React, { FC } from "react";

interface ICustomTextArea {
  required?: boolean;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  eventHandler?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const CustomTextArea: FC<ICustomTextArea> = (props) => {
  return (
    <textarea
      required={props.required}
      id={props.id}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.eventHandler}
    ></textarea>
  );
};
