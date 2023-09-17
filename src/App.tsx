import { useEffect } from "react";
import { fetchContinents } from "./utils/fetch-continents";
import { fetchCountries } from "./utils/fetch-countries";
import { IntlProvider } from "react-intl";
import { DestinationGenerator } from "./modules/DestinationGenerator/DestinationGenerator";

function App() {
  useEffect(() => {
    fetchContinents().then(console.log);
    fetchCountries().then(console.log);
  }, []);

  return (
    <IntlProvider locale="en">
      <DestinationGenerator></DestinationGenerator>
    </IntlProvider>
  );
}

export default App;
