import "./App.css";
import { useState, useEffect } from "react";
import BeerCardContainer from "./components/BeerCardContainer/BeerCardContainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const url = "https://api.punkapi.com/v2/beers";

  const getBeer = async (beer) => {
    if (!beer == " ") {
      const res = await fetch(url + "?beer_name=" + beer);
      const data = await res.json();
      setUsers(data);
    } else {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    }
  };

  useEffect(() => {
    getBeer(searchTerm);
  }, [searchTerm]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };
  return (
    <>
      <div className="App">
        <div>
          <NavBar
            handleSearchInput={handleSearchInput}
            searchTerm={searchTerm}
          />
        </div>
        <BeerCardContainer BeerCards={users} />
      </div>
    </>
  );
};

export default App;
