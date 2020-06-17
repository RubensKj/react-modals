import React from 'react';

import EmailContent from '../../components/EmailContent';
import PortfolioContent from '../../components/PortfolioContent';
import CovidContent from '../../components/CovidContent';

import { Container, Card } from './styles';

const ModalsIcon: React.FC = () => {
  return (
    <Container>
      <Card>
        <EmailContent />
      </Card>
      <Card>
        <PortfolioContent />
      </Card>
      <Card>
        <CovidContent />
      </Card>
    </Container>
  );
}

export default ModalsIcon;