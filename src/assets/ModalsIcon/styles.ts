import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;

  cursor: initial !important;

  transition: 0.2s transform;

  transform: scale(0.75);

  @media only screen and (max-width: 1325px) {
    transform: scale(0.65) !important;
    margin-right: 25px;
  }

  @media only screen and (max-width: 1170px) {
    transition: 0.2s margin-right;
    margin-right: 215px;
  }

  @media only screen and (max-width: 940px) {
    position: initial;
    margin-right: initial;
    margin-top: 175px;
    margin-bottom: 80px;
    transition: 0.2s margin;
  }

  @media only screen and (max-width: 860px) {
    margin-right: 55px;
  }

  @media only screen and (max-width: 770px) {
    margin-right: 85px;
  }

  @media only screen and (max-width: 675px) {
    margin-right: 125px;
  }

  @media only screen and (max-width: 590px) {
    margin-right: 165px;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
    margin-top: 125px;
    margin-bottom: 0;
    margin-right: 0;
    flex-direction: column;
    transform: scale(1) !important;
  }
`;

export const Card = styled.div`
  position: absolute;
  border: none;
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 8px;
  outline: none;
  padding: 20px;
  max-width: 335px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 19px 2px;

  button {
    cursor: initial !important;
  }

  :nth-child(1) {
    top: -155px;
    left: 5px;
  }

  :nth-child(2) {
    top: -130px;
    left: 195px;
    z-index: 2;
  }

  :nth-child(3) {
    top: -155px;
    left: 380px;
  }


  @media only screen and (max-width: 550px) {
    position: initial;
    margin-bottom: 25px;
  }
`;
