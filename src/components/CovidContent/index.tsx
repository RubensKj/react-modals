import React from 'react';

import CovidIcon from '../../assets/CovidIcon';

import {
  Container, ImageArea, TextArea, Title,
  DescriptionArea, Description, Button, Redirect
} from './styles';

const CovidContent: React.FC = () => {
  return (
    <Container>
      <ImageArea>
        <CovidIcon size={128} />
      </ImageArea>
      <TextArea>
        <Title>Warn with Covid-19</Title>
        <DescriptionArea>
          <Description>If your country have the Coronavirus, please wear a mask when you go out. If you don’t have a mask, please don’t go out or reduce your number of times.</Description>
        </DescriptionArea>
      </TextArea>
      <Redirect target="_blank" href="https://covid19.who.int/">
        <Button>Learn more on who.int</Button>
      </Redirect>
    </Container>
  );
}

export default CovidContent;