import React, { useEffect, useState, useLayoutEffect } from "react";
import "./App.css";
import Header from "./MainComponent/Header";
import Main from "./MainComponent/Main";
import Footer from "./MainComponent/Footer";
import sahteVeri from "./sahteVeri";
import axios from "axios";
import Pick from "./MainComponent/Pick";
import sahteArray from "./MainComponent/sahteArray";

function App() {
  const dateNow = new Date().toISOString().slice(0, 10);
  const [data, setData] = useState(sahteVeri);
  const [date, setDate] = useState(dateNow);
  const [isRandom, setIsRandom] = useState(false);

  useEffect(() => {
    setData(null);
    const dataUrl = isRandom
      ? `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=3`
      : `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&&date=${date}`;
    axios
      .get(dataUrl)
      .then((res) => setData(res.data))
      .catch((res) => setData(isRandom ? sahteVeri : sahteArray));
  }, [date, isRandom]);

  return (
    <div className="App">
      <Header setIsRandom={setIsRandom} date={date} setDate={setDate} />
      {isRandom ? <Pick items={data} /> : <Main data={data} />}
      <Footer />
    </div>
  );
}

export default App;
