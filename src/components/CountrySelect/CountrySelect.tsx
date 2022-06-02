import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const CountrySelect: FC = () => {
  const [countryList, setCountryList] = useState([]);
  const [countrySelectorValue, setCountrySelectorValue] = useState<
    string | null
  >();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const handleError = (err: Error) => {
    setError(err);
  };

  const getCountryList = () => {
    return axios
      .get("http://localhost:8080/countrieslist")
      .then((res) => res.data)
      .then((data) => setCountryList(data))
      .catch(handleError);
  };

  useEffect(() => {
    getCountryList();
  });

  const navigateToCountryPage = () => {
    if (countrySelectorValue) {
      const country = countrySelectorValue.split(" ").join("");
      navigate(`/countrypage/${country?.toLowerCase()}`);
    }
  };

  if (error) {
    return <div>Something went wrong!!!</div>;
  } else {
    return (
      <>
        <div>
          <br />
          <Autocomplete
            value={countrySelectorValue ? countrySelectorValue : null}
            onChange={(event: unknown, newValue: string | null) => {
              setCountrySelectorValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={countryList}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Choose your country" />
            )}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <Stack spacing={2} direction="row">
            <Button onClick={navigateToCountryPage} variant="contained">
              Lets Travel
            </Button>
          </Stack>
        </div>
      </>
    );
  }
};
