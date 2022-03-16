import "./App.css";
import { useState, useEffect } from "react";
import BeerCardContainer from "./components/BeerCardContainer/BeerCardContainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [Abv, setAbv] = useState("");
  const [date, setDate] = useState("");

  const url = "https://api.punkapi.com/v2/beers";

  const getBeer = async (beer, AbvNumber, date) => {
    if (!beer == " ") {
      const res = await fetch(url + "?beer_name=" + beer);
      const data = await res.json();
      setUsers(data);
    } else if (AbvNumber == true) {
      const res = await fetch(url + "?abv_gt=6");
      const data = await res.json();
      setUsers(data);
    } else if (date == true) {
      const res = await fetch(url + "?brewed_before=12-2010");
      const data = await res.json();
      setUsers(data);
    } else {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    }
  };

  useEffect(() => {
    getBeer(searchTerm, Abv, date);
  }, [searchTerm, Abv, date]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAbvCheckbox = (event) => {
    setAbv(event.target.checked);
  };
  const handleDate = (event) => {
    setDate(event.target.checked);
  };

  return (
    <>
      <div className="App">
        <NavBar
          handleSearchInput={handleSearchInput}
          handleAbvCheckbox={handleAbvCheckbox}
          handleDate={handleDate}
        />
        <BeerCardContainer BeerCards={users} />
      </div>
    </>
  );
};

export default App;
