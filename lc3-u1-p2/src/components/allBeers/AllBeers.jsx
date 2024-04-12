import BeerItem from "../beerItem/BeerItem";
import PropTypes from "prop-types";

const AllBeers = ({ beers }) => {
  const beersMapped = beers.map((beer) => (
    <BeerItem
      key={beer.id}
      name={beer.beerName}
      style={beer.beerStyle}
      price={beer.price}
    ></BeerItem>
  ));

  return (
    <div className="d-flex justify-content-center flex-wrap">{beersMapped}</div>
  );
};

export default AllBeers;

AllBeers.propTypes = {
  beers: PropTypes.array,
};
