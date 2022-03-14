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
            tagline={beer.tagline}
            abv={beer.abv}
            description={beer.description}
          />
        );
      })}
    </div>
  );
};

export default BeerCardContainer;
