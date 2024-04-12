import BeerItem from "../beerItem/BeerItem";
import PropTypes from "prop-types";

const AvailableBeers = ({ beers }) => {
  const availableBeers = beers.filter((beer) => beer.available);
  const availableBeersMapped = availableBeers.map((beer) => (
    <BeerItem
      key={beer.id}
      name={beer.beerName}
      style={beer.beerStyle}
      price={beer.price}
    ></BeerItem>
  ));

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {availableBeersMapped}
    </div>
  );
};

export default AvailableBeers;

AvailableBeers.propTypes = {
  beers: PropTypes.array,
};
