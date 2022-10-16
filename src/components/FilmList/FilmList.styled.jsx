import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  transition: transform 250ms ease-in-out;

  :hover {
    transform: translateY(-5px);
  }
`;

export const Img = styled.img`
  object-fit: cover;
  width: 180px;
  height: 270px;
`;

export const Text = styled.p`
  width: 170px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
`;
