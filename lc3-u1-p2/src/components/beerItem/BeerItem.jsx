import PropTypes from "prop-types";

const BeerItem = ({ name, style, price }) => {
  const dolarTipeOfChange = 1000;

  return (
    <ul>
      <li>{name}</li>
      <li>{style}</li>
      <li>${price * dolarTipeOfChange}</li>
    </ul>
  );
};

export default BeerItem;

BeerItem.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.number,
};
