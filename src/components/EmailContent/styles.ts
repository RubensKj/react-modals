import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;

  padding: 0 12px;
  margin-top: 15px;
  margin-bottom: 95px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #555251;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
`;

export const DescriptionArea = styled.div`
  margin-top: 20px;
`;

export const Description = styled.span`
  font-size: 15px;
  color: #9e9e9e;
  font-family: 'Poppins', sans-serif;
`;

export const Button = styled.button`
  font-size: 15px;
  color: #fff;
  font-family: 'Poppins', sans-serif;

  border: none;
  background: #4a90e4;
  font-weight: 400;

  padding: 10px 25px;
  border-radius: 18px;
  cursor: pointer;
`;

export const Redirect = styled.a`
  text-decoration: none;
`;