import PropTypes from "prop-types";

const BeerItem = ({ name, style, price }) => {
  const dolarTipeOfChange = 1000;

  return (
    <div>
      <h2>{name}</h2>
      <h3>{style}</h3>
      <p>${price * dolarTipeOfChange}</p>
    </div>
  );
};

export default BeerItem;

BeerItem.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.number,
};
