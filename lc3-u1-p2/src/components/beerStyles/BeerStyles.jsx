import PropTypes from "prop-types";

const BeerStyles = ({ beers }) => {
  const styles = [...new Set(beers.map((beer) => beer.beerStyle))];

  return (
    <ul>
      {styles.map((style, index) => (
        <li key={index}>{style}</li>
      ))}
    </ul>
  );
};

export default BeerStyles;

BeerStyles.propTypes = {
  beers: PropTypes.array,
};
