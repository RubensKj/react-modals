import styled from 'styled-components';

interface Props {
  color: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.div`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  margin-left: 5px;

  color: ${(props: Props) => props.color};
`;