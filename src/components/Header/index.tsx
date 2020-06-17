import React from 'react';

import Logo from '../../assets/Logo';

import { Container, ButtonPortfolio, Redirect } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Redirect target="_blank" href="http://rubenskj.com/">
        <Logo />
      </Redirect>
      <div />
      <Redirect target="_blank" href="https://github.com/RubensKj">
        <ButtonPortfolio>Follow me</ButtonPortfolio>
      </Redirect>
    </Container>
  );
}

export default Header;