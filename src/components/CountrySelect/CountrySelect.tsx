import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CountryList } from "./CountryList";
import { MyButton } from "../MyButton/MyButton";

export const CountrySelect: FC = () => {
  const [value, setValue] = useState<string | null>(CountryList[0]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const navigateToCountryPage = () => {
    if (value) {
      const country = value.split(" ").join("");
      navigate(`/countrypage/${country?.toLowerCase()}`);
    }
  };

  return (
    <>
      <div>
        <br />
        <Autocomplete
          value={value}
          onChange={(event: unknown, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={CountryList}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose your country" />
          )}
        />
      </div>
      <MyButton navigate={navigateToCountryPage} />
    </>
  );
};
