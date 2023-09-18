import React, { FC } from "react";
import { CombinedDropdownProps } from "./Dropdown.types";
import styled, { css } from "styled-components";
import Tick from "../Icons/Tick.png";

export const Dropdown: FC<CombinedDropdownProps> = ({
  options,
  size,
  value,
  onFocus,
  onChange,
  isError = false,
  hasSelection = false,
  placeholder,
  selected,
  label,
  ...props
}) => (
  <SelectWrapper>
    <Label>{label}</Label>

    <SelectComponent
      size={size}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      hasSelection={hasSelection}
      placeholder={placeholder}
      {...props}
      isError={isError}
    >
      {options.map((option) => (
        <Option key={`${option}`} value={option} selected={option === selected}>
          {option}
        </Option>
      ))}
    </SelectComponent>
  </SelectWrapper>
);

const SelectComponent = styled.select<{
  hasSelection: boolean;
  isError: boolean;
  size: number;
}>`
  width: 370px;
  min-height: 54px;
  height: ${(props) => props.size * 54}px;
  top: 22px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 34px 0px #0000001a;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #8e8d8d;
  padding-left: 17px;

  &:hover {
    box-shadow: 0px 4px 34px 0px #00000033;
  }

  &:focus {
    border: 2px solid #0e7dff;
    box-shadow: 0px 4px 34px 0px #00000033;
  }

  &:disabled {
    background: #dfdfdf;
    height: 39px;
  }

  ${({ isError }) =>
    isError &&
    css`
      border: 2px solid #ff0e0e;
      box-shadow: 0px 4px 34px 0px #00000033;
    `};

  ${({ hasSelection }) =>
    hasSelection &&
    css`
      border: 2px solid #ff0e0e;
      box-shadow: 0px 4px 34px 0px #00000033;
    `};
`;

const Option = styled.option<{ selected?: boolean }>`
  width: 370px;
  height: 54px;
  top: 178px;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin: auto;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 17px;

  &:hover {
    background-color: #dfecff;
    animation-duration: 0ms;
    color: #000000;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #9bc3ff !important;
      color: #0139ff;

      &::after {
        content: url(${Tick});
        float: right;
        padding-right: 16px;
      }
    `};
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 29px;
`;

const Label = styled.label`
  font-family: Helvetica;
  font-size: 15px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  width: 65px;
  height: 17px;
  margin-bottom: 5px;
`;
