import { defineMessages } from "react-intl";

const destinationScope = `destination.content`;

export const content = defineMessages({
  destinationMessage: {
    id: `${destinationScope}.destinationMessage`,
    defaultMessage:
      "You're travelling to {selectedCountry} in the continent {selectedContinentName}.",
  },
});
