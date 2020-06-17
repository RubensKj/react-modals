import React from 'react';

// Assets
import CodeIcon from '../CodeIcon';

// Styles
import { Container, LogoText } from './styles';

interface Props {
  color?: string;
}

const Logo: React.FC<Props> = ({ color = "#252527" }) => {
  return (
    <Container>
      <CodeIcon size={20} />
      <LogoText color={color}>RubensKj</LogoText>
    </Container>
  );
}

export default Logo;