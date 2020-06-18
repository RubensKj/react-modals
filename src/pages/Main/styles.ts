import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 1036px;
  width: 100%;
  padding: 0 15px;

  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 72px;
  margin-bottom: 185px;

  transition: 0.2s flex-direction;

  @media only screen and (max-width: 940px) {
    justify-content: center;
    flex-direction: column;
  }

  @media only screen and (max-width: 550px) {
    transition: 0.2s margin-bottom;

    margin-bottom: 55px !important; 
  }
`;

export const TitleArea = styled.div`
  max-width: 475px;
  width: 100%;
  text-align: left;

  @media only screen and (max-width: 940px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 58px;
  color: #252527;
`;

export const Strong = styled.strong`
  color: #4a90e4;
`;

export const DescriptionArea = styled.div`
  margin-top: 15px;
  width: 75%;

  transition: 0.2s width;

  @media only screen and (max-width: 940px) {
    text-align: center;
    width: 100%;
  }
`;

export const Description = styled.span`
  font-size: 18px;
  color: #a7a7a7;
  font-weight: 300;
`;

export const BottomArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 5px 15px;

  margin-top: 65px;
  margin-bottom: 85px;

  @media only screen and (max-width: 550px) {
    transition: 0.2s margin-bottom;

    margin-top: 15px !important; 
  }
`;

export const TitleButtonArea = styled.h1`
  font-size: 24px;
  color: #4a90e4;
`;

export const ButtonArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;

  max-width: 550px;
  width: 100%;
  padding: 5px 15px;
  grid-gap: 30px;

  margin-top: 35px;

  @media only screen and (max-width: 550px) {
    grid-gap: 15px;
  }

  @media only screen and (max-width: 450px) {
    grid-template-columns: auto;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: none;
  background: #fff;

  max-width: 155px;
  width: 100%;
  padding: 15px 20px;
  border-radius: 8px;
  cursor: pointer;

  box-shadow: 0px 8px 19px 2px rgba(0,0,0,0.05);

  transition: 0.2s transform;

  :hover {
    transform: translateY(-2px);
  }

  @media only screen and (max-width: 550px) {
    transition: 0.2s max-width;
    max-width: 140px;

    svg {
      transition: 0.2s margin-bottom;
      width: 48px;
      height: 48px;
    }
  }
`;

export const Span = styled.span`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  color: #a7a7a7;
  margin-top: 12px;

  @media only screen and (max-width: 550px) {
    font-size: 14px;
    white-space: nowrap;
  }
`;