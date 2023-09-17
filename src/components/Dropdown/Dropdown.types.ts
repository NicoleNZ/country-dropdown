import { ChangeEventHandler, SelectHTMLAttributes } from "react";
import { TCountries, TContinents } from "countries-list";

type Option = string | number | string[] | TCountries | TContinents; //the first three types are there with the intention of making this Dropdown reusable all over the application

interface DropdownProps {
  options: Option[];
  hasSelection: boolean;
  label?: string;
  selected?: Option;
  value?: Option;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  isError?: boolean;
}

export type CombinedDropdownProps = SelectHTMLAttributes<HTMLSelectElement> &
  DropdownProps;
