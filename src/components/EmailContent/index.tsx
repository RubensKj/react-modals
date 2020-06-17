import React from 'react';

import EmailIcon from '../../assets/EmailIcon';

import {
  Container, ImageArea, TextArea, Title,
  DescriptionArea, Description, Button, Redirect
} from './styles';

const EmailContent: React.FC = () => {
  return (
    <Container>
      <ImageArea>
        <EmailIcon size={128} />
      </ImageArea>
      <TextArea>
        <Title>Email has been sent</Title>
        <DescriptionArea>
          <Description>Please check your email to verify your account and have full access to the system.</Description>
        </DescriptionArea>
      </TextArea>
      <Redirect href="#">
        <Button>Click to verify</Button>
      </Redirect>
    </Container>
  );
}

export default EmailContent;
