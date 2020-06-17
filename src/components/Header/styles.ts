import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 68px;
  padding: 10px 25px;
`;

export const ButtonPortfolio = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: #fff;

  padding: 8px 20px;
  border-radius: 8px;

  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  color: #252527;

  cursor: pointer;

  box-shadow: 0px 8px 19px 2px rgba(0,0,0,0.08);
`;

export const Redirect = styled.a`
  text-decoration: none;
`;