import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./MainComponent/Header";
import Main from "./MainComponent/Main";
import Footer from "./MainComponent/Footer";
import sahteVeri from "./sahteVeri";
import axios from "axios";

function App() {
  const dateNow = new Date().toISOString().slice(0, 10);
  const [data, setData] = useState(sahteVeri);
  const [date, setDate] = useState(dateNow);

  useEffect(() => {
    setData(null);
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&&date=${date}`)
      .then((res) => {
        setData(res.data);
      });
  }, [date]);

  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
      {data ? <Main data={data} /> : <p>Loading...</p>}
      <Footer />
    </div>
  );
}

export default App;
