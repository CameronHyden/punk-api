import BeerCard from "../BeerCard/BeerCard";
import "./BeerCardContainer.scss";

const BeerCardContainer = ({ BeerCards }) => {
  return (
    <div className="card-container">
      {BeerCards.map((beer) => {
        return (
          <BeerCard
            key={beer.id}
            name={beer.name}
            image={beer.image_url}
            abv={beer.abv}
            ph={beer.ph}
            description={beer.tagline}
          />
        );
      })}
    </div>
  );
};

export default BeerCardContainer;
