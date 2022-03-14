import "./App.css";
import { useState, useEffect } from "react";
import BeerCardContainer from "./components/BeerCardContainer/BeerCardContainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [users, setUsers] = useState([]);

  const url = "https://api.punkapi.com/v2/beers";

  const getBeer = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="App">{<BeerCardContainer BeerCards={users} />}</div>
    </>
  );
};

export default App;
