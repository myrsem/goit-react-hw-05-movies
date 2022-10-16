import styled from 'styled-components';

export const SearchForm = styled.form`
  position: absolute;
  top: 8px;
  right: 50%;
  transform: translate(50%);
  display: flex;
  width: 400px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const FormButton = styled.button`
  display: inline-block;
  width: 80px;
  height: 34px;
  border-radius: 4px;
  border-color: lavenderblush;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  transition: transform 250ms ease-in-out;

  &:hover {
    opacity: 1;
    border: 0;
    color: white;
    background-color: orangered;
  }
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  border-radius: 4px;
  font: inherit;
  font-size: 14px;
  border-color: lavenderblush;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
