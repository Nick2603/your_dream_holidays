import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/UserSlice";
import styles from "./App.module.scss";

const App = () => {
  const { count } = useAppSelector((state) => state.userReducer);
  const { increment, decrement } = userSlice.actions;
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.div}>Your Dream Holidays</div>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Increment</button>
    </>
  );
};

export default App;
