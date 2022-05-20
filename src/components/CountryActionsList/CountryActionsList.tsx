import React, { FC, useState } from "react";
import Card from "@mui/material/Card";
import { CardContentCustomStyles } from "../../styles/CardContentCustomStyles";
import { CustomButton } from "../../reusableComponents/CustomButton/CustomButton";
import { CustomInput } from "../../reusableComponents/CustomInput/CustomInput";
import { CustomTextArea } from "../../reusableComponents/CustomTextArea/CustomTextArea";
import styles from "./CountryActionsList.module.scss";

interface IInputsData {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  eventHandler?: React.ChangeEventHandler<HTMLInputElement>;
}

export const CountryActionsList: FC = () => {
  const [country, setCountry] = useState("");
  const [activities, setActivities] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdate = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    switch (name) {
      case "country":
        setCountry(value);
        break;
      case "activities":
        setActivities(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const sendForm = () => {
    if (country.length > 0 && activities.length > 0 && email.length > 0) {
      setCountry("");
      setActivities("");
      setEmail("");
    } else {
      alert("Please fill in all fields!!!");
    }
  };

  const inputsData: IInputsData[] = [
    {
      id: "country",
      name: "country",
      type: "text",
      value: country,
      placeholder: "Fill in country name",
      eventHandler: handleUpdate,
    },
    {
      id: "email",
      name: "email",
      type: "email",
      value: email,
      placeholder: "Fill in your email",
      eventHandler: handleUpdate,
    },
  ];

  return (
    <Card>
      <CardContentCustomStyles>
        <form>
          <h4>Your Activities</h4>
          {inputsData.map((v) => (
            <div key={v.id}>
              <CustomInput
                required={true}
                id={v.id}
                name={v.name}
                type={v.type}
                value={v.value}
                placeholder={v.placeholder}
                eventHandler={v.eventHandler}
              />
            </div>
          ))}
          <div>
            <CustomTextArea
              required={true}
              id="activities"
              name="activities"
              value={activities}
              placeholder="Fill in preferred activities"
              eventHandler={handleUpdate}
            />
          </div>
          <span>
            Hint: here you can create a list of preferred activities for
            particular country and send it to your email address.
          </span>
          <CustomButton text={"Sent"} eventHandler={sendForm} />
        </form>
      </CardContentCustomStyles>
    </Card>
  );
};
