import "./App.css";
import { useState, useEffect } from "react";
import BeerCardContainer from "./components/BeerCardContainer/BeerCardContainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [Abv, setAbv] = useState("");
  const [date, setDate] = useState("");
  const [ph, setPh] = useState("");

  const url = "https://api.punkapi.com/v2/beers";

  const fetchBeers = async (urlParams) => {
    const res = await fetch(url + urlParams);
    const data = await res.json();
    setBeers(data);
  };

  const getBeer = async (beer, AbvNumber, date) => {
    if (!beer == " ") {
      fetchBeers("?beer_name=" + beer);
    } else if (AbvNumber == true) {
      fetchBeers("?abv_gt=6");
    } else if (date == true) {
      fetchBeers("?brewed_before=12-2010");
    } else {
      fetchBeers(" ");
    }
  };

  useEffect(() => {
    getBeer(searchTerm, Abv, date, ph);
  }, [searchTerm, Abv, date, ph]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAbvCheckbox = (event) => {
    setAbv(event.target.checked);
  };
  const handleDate = (event) => {
    setDate(event.target.checked);
  };
  const handlePh = (event) => {
    setPh(event.target.checked);
  };

  return (
    <>
      <div className="App">
        <NavBar
          handleSearchInput={handleSearchInput}
          handleAbvCheckbox={handleAbvCheckbox}
          handleDate={handleDate}
          handlePh={handlePh}
        />
        <BeerCardContainer BeerCards={beers} ph={ph} />
      </div>
    </>
  );
};

export default App;
