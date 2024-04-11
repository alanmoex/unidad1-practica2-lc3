import Beers from "./components/beers/Beers";
import BeersList from "./components/showBeers/showBeers";

function App() {
  return (
    <>
      <BeersList beers={<Beers />} />
    </>
  );
}

export default App;
