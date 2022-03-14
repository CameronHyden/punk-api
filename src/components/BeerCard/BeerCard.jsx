import "./BeerCard.scss";

const BeerCard = ({ name, image, tagline, abv, description }) => {
  return (
    <div className="beer-card">
      <img className="beer-card__image" src={image} alt={name} />
      <div className="beer-card__content">
        <h2 className="beer-card__name">{name}</h2>
        <h3>{tagline}</h3>
        <p>{description}</p>

        <p>{abv}%</p>
      </div>
    </div>
  );
};

export default BeerCard;
