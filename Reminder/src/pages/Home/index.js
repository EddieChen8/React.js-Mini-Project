import React, { useState, useEffect } from "react";
import { API_GET_DATA } from "../../global/constants";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const data = await res.json();
  setData(data);
}

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      <Edit add={setData}></Edit>
      <List listData={data} deleteData={setData}></List>
    </div>
  );
};

export default Home;
