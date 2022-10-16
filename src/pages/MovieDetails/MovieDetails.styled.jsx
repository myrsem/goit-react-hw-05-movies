import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 90px;
  height: 34px;
  border-color: lavenderblush;
  border-radius: 4px;
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

export const ButtonLabel = styled(BiArrowBack)`
  margin-right: 5px;
`;

export const List = styled.ul`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li``;

export const Text = styled.p`
  margin-top: 20px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const Links = styled(Link)`
  margin-top: 10px;
`;
