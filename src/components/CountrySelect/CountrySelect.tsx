import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCountries } from "./../../store/reducers/CountriesSlice";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const CountrySelect: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, countries } = useAppSelector(
    (state) => state.CountriesReducer
  );
  const [countrySelectorValue, setCountrySelectorValue] = useState<
    string | null
  >();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

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
            options={countries}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={
                  loading === "pending"
                    ? "Please, wait. Loading"
                    : "Choose your country"
                }
              />
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
