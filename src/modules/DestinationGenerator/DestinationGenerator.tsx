import { Dropdown } from "../../components/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import { fetchContinents } from "../../utils/fetch-continents";
import { fetchCountries } from "../../utils/fetch-countries";
import { FormattedMessage } from "react-intl";
import * as msg from "../messages";
import styled from "styled-components";

export const DestinationGenerator = () => {
  const initialContinentValue = {
    code: "",
    name: "",
  };

  const initialCountryValue = {
    capital: "",
    continent: "",
    currency: [],
    languages: [],
    name: "",
    native: "",
    phone: [],
  };

  const [continents, setContinents] = useState([]);
  const [selectedContinentName, setSelectedContinentName] = useState(
    initialContinentValue.name
  );
  const [selectedContinentCode, setSelectedContinentCode] = useState(
    initialContinentValue.code
  );

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(
    initialCountryValue.name
  );

  const [hasContinentSelection, setHasContinentSelection] = useState(false);
  const [hasCountrySelection, setHasCountrySelection] = useState(false);

  const [continentSize, setContinentSize] = useState(1);
  const [countrySize, setCountrySize] = useState(1);

  useEffect(() => {
    fetchContinents().then((continents) => {
      const processContinents = Object.entries(continents);
      const continentArray: typeof Option[] = [];
      for (const [key, value] of processContinents) {
        continentArray.push({ code: key, name: value });
      }
      return setContinents(continentArray);
    });

    fetchCountries().then((countries) => {
      const countriesArray = Object.values(countries);
      return setCountries(countriesArray);
    });
  }, []);

  useEffect(() => {
    continents.map((continent) => {
      if (continent.name === selectedContinentName) {
        setSelectedContinentCode(continent.code);
      }
    }),
      [selectedContinentName];
  });

  useEffect(() => {
    const newFilteredCountries = [];
    countries.map((country) => {
      if (country.continent === selectedContinentCode) {
        newFilteredCountries.push(country);
      }
    });
    setFilteredCountries(newFilteredCountries);
  }, [selectedContinentCode]);

  const showMessage = hasContinentSelection && hasCountrySelection;
  console.log(selectedContinentName);
  return (
    <>
      <Title>Select a location</Title>
      <DropdownWrapper>
        <Dropdown
          size={continentSize}
          value={selectedContinentName}
          selected={selectedContinentName}
          label="Continent"
          options={continents.map((continent) => {
            return continent.name;
          })}
          onFocus={() => {
            setContinentSize(7);
          }}
          onBlur={() => {
            setContinentSize(1);
          }}
          onChange={(e) => {
            e.preventDefault();
            setSelectedContinentName(e.target.value);
            setHasContinentSelection(true);
          }}
          hasSelection={hasContinentSelection}
        ></Dropdown>
        <Dropdown
          size={countrySize}
          value={selectedCountry}
          selected={selectedCountry}
          label="Country"
          disabled={!selectedContinentName}
          options={filteredCountries.map((country) => {
            return country.name;
          })}
          onFocus={() => {
            setCountrySize(7);
          }}
          onBlur={() => {
            setCountrySize(1);
          }}
          onChange={(e) => {
            e.preventDefault();
            setSelectedCountry(e.target.value);
            setHasCountrySelection(true);
          }}
          hasSelection={hasCountrySelection}
        ></Dropdown>
      </DropdownWrapper>
      {showMessage && (
        <MessageContainer>
          <MessageWrapper>
            <MessageTitle>Congratulations</MessageTitle>
            <FormattedMessage
              {...msg.content.destinationMessage}
              values={{
                selectedContinentName,
                selectedCountry,
              }}
            />
          </MessageWrapper>
        </MessageContainer>
      )}
    </>
  );
};

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 200px;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 200px;
  margin-top: 31px;
  width: 430px;
  height: 99px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.1);
`;

const MessageWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 25px;
  gap: 7px;
`;

const MessageTitle = styled.text`
  color: #000;
  font-family: Helvetica;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Title = styled.h1`
  width: 316px;
  height: 46px;
  margin-top: 168px;
  margin-left: 200px;
  font-family: Helvetica;
  font-size: 40px;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
