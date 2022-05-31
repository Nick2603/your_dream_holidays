import React, { FC, useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "./CountryActionsList.module.scss";

export const CountryActionsList: FC = () => {
  const [country, setCountry] = useState("");
  const [activities, setActivities] = useState("");
  const [email, setEmail] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

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

  const addActivity = () => {
    if (activities) {
      setTodoList([...todoList, activities]);
      setActivities("");
    } else {
      alert("Please fill in an activity field!!!");
    }
  };

  const sendForm = () => {
    if (country && todoList.length > 0 && email) {
      setCountry("");
      setActivities("");
      setEmail("");
      setTodoList([]);
    } else {
      alert("Please fill in all fields!!!");
    }
  };

  return (
    <Card>
      <form className={styles["form-wrapper"]}>
        <h4>Actions List</h4>
        <div>
          <input
            required
            id="country"
            name="country"
            type="text"
            value={country}
            placeholder="Fill in country name"
            onChange={handleUpdate}
          />
        </div>
        <div>
          <input
            required
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Fill in your email"
            onChange={handleUpdate}
          />
        </div>
        <div>
          <textarea
            required
            id="activities"
            name="activities"
            value={activities}
            placeholder="Fill in preferred activities"
            onChange={handleUpdate}
          ></textarea>
        </div>
        <div style={{ margin: "10px" }}>
          <Stack spacing={2} direction="row">
            <Button onClick={addActivity} variant="contained">
              Add activity
            </Button>
          </Stack>
        </div>
        <span>
          Hint: here you can create a list of preferred activities for
          particular country and send it to your email address.
        </span>
        <div>
          {todoList.map((activity, index) => (
            <div key={index}>{activity}</div>
          ))}
        </div>
        <div style={{ margin: "10px" }}>
          <Stack spacing={2} direction="row">
            <Button onClick={sendForm} variant="contained">
              Sent
            </Button>
          </Stack>
        </div>
      </form>
    </Card>
  );
};
