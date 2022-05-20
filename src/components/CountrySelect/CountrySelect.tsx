import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CountryList } from "./CountryList";
import { CustomButton } from "../../reusableComponents/CustomButton/CustomButton";

export const CountrySelect: FC = () => {
  const [countrySelectorValue, setCountrySelectorValue] = useState<
    string | null
  >(CountryList[0]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const navigateToCountryPage = () => {
    if (countrySelectorValue) {
      const country = countrySelectorValue.split(" ").join("");
      navigate(`/countrypage/${country?.toLowerCase()}`);
    }
  };

  return (
    <>
      <div>
        <br />
        <Autocomplete
          value={countrySelectorValue}
          onChange={(event: unknown, newValue: string | null) => {
            setCountrySelectorValue(newValue);
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
      <CustomButton
        eventHandler={navigateToCountryPage}
        text={"Let's Travel"}
      />
    </>
  );
};
