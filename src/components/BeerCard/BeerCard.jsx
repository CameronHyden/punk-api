import "./BeerCard.scss";

const BeerCard = ({ name, image, abv, description, ph }) => {
  return (
    <div className="beer-card">
      <img className="beer-card__image" src={image} alt={name} />
      <div className="beer-card__content">
        <h2 className="beer-card__name">{name}</h2>
        <p>
          {abv}% / {ph}ph
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BeerCard;
