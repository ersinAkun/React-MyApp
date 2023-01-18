import React from "react";
import { useContext } from "react";
import StoreContext from "../../store";
const Exchange = () => {
    const store = useContext(StoreContext);
  return <div>Exchange {store.counter}</div>;
};
export default Exchange;