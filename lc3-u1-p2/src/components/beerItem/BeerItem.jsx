import PropTypes from "prop-types";

const BeerItem = ({ name, style, price }) => {
  const dolarTipeOfChange = 1000;

  return (
    <ul className="list-group">
      <li className="list-group-item">{name}</li>
      <li className="list-group-item">{style}</li>
      <li className="list-group-item">${price * dolarTipeOfChange}</li>
    </ul>
  );
};

export default BeerItem;

BeerItem.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.number,
};
