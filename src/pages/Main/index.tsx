import React, { useState } from 'react';

import Icon from '../../assets/Icon';
import ModalsIcon from '../../assets/ModalsIcon';

import EmailIcon from '../../assets/EmailIcon';
import CodeIcon from '../../assets/CodeIcon';
import CovidIcon from '../../assets/CovidIcon';

import EmailModal from '../../components/EmailModal';
import PortfolioModal from '../../components/PortfolioModal';
import CovidModal from '../../components/CovidModal';

import {
  Container, TitleWrapper, TitleArea, Title,
  Strong, DescriptionArea, Description, BottomArea,
  TitleButtonArea, ButtonArea, Button, Span
} from './styles';

const Main: React.FC = () => {

  const [isOpenEmail, setIsOpenEmail] = useState<boolean>(false);
  const [isOpenPortfolio, setIsOpenPortfolio] = useState<boolean>(false);
  const [isOpenCovid, setIsOpenCovid] = useState<boolean>(false);

  function toggleOpenPortfolio(): void {
    setIsOpenPortfolio(!isOpenPortfolio);
  }

  function toggleOpenEmail(): void {
    setIsOpenEmail(!isOpenEmail);
  }

  function toggleOpenCovid(): void {
    setIsOpenCovid(!isOpenCovid);
  }

  return (
    <>
      <EmailModal
        isOpen={isOpenEmail}
        setIsOpen={toggleOpenEmail}
      />

      <PortfolioModal
        isOpen={isOpenPortfolio}
        setIsOpen={toggleOpenPortfolio}
      />

      <CovidModal
        isOpen={isOpenCovid}
        setIsOpen={toggleOpenCovid}
      />

      <Container>
        <TitleWrapper>
          <TitleArea>
            <Icon />
            <Title>Using Modals from <Strong>React</Strong></Title>
            <DescriptionArea>
              <Description>The library used is react-modal (^3.11.2), to create the base of modals.</Description>
            </DescriptionArea>
          </TitleArea>
          <ModalsIcon />
        </TitleWrapper>
        <BottomArea>
          <TitleButtonArea>Example Modals</TitleButtonArea>
          <ButtonArea>
            <Button onClick={toggleOpenEmail}>
              <EmailIcon />
              <Span>E-mail modal</Span>
            </Button>
            <Button onClick={toggleOpenPortfolio}>
              <CodeIcon size={64} />
              <Span>My Portfolio</Span>
            </Button>
            <Button onClick={toggleOpenCovid}>
              <CovidIcon size={64} />
              <Span>Covid-19</Span>
            </Button>
          </ButtonArea>
        </BottomArea>
      </Container>
    </>
  );
}

export default Main;