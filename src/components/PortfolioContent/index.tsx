import React from 'react';

import CodeIcon from '../../assets/CodeIcon';

import {
  Container, ImageArea, TextArea, Title,
  DescriptionArea, Description, Button, Redirect
} from './styles';

const PortfolioContent: React.FC = () => {
  return (
    <Container>
      <ImageArea>
        <CodeIcon size={128} />
      </ImageArea>
      <TextArea>
        <Title>My portfolio</Title>
        <DescriptionArea>
          <Description>Come see my portfolio where I put all my projects, certificates, and other cool things :)</Description>
        </DescriptionArea>
      </TextArea>
      <Redirect target="_blank" href="http://rubenskj.com">
        <Button>Click to access</Button>
      </Redirect>
    </Container>
  );
}

export default PortfolioContent;