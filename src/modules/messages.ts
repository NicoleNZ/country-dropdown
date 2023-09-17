import { defineMessages } from "react-intl";

const destinationScope = `destination.content`;

export const content = defineMessages({
  destinationMessage: {
    id: `${destinationScope}.destinationMessage`,
    defaultMessage:
      "I am going to {selectedCountry} in {selectedContinentName}!",
  },
});
