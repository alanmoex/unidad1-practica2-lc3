import BeerItem from "../beerItem/BeerItem";
import PropTypes from "prop-types";

const ShowBeers = ({ beers }) => {
  const beersMapped = beers.map((beer) => (
    <BeerItem
      key={beer.id}
      name={beer.beerName}
      style={beer.beerStyle}
      price={beer.price}
    ></BeerItem>
  ));

  return <div>{beersMapped}</div>;
};

export default ShowBeers;

ShowBeers.propTypes = {
  beers: PropTypes.array,
};
