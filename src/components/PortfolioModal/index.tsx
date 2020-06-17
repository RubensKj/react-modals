import React from 'react';

import Modal from '../Modal';
import PortfolioContent from '../PortfolioContent';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const PortfolioModal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal width='335px' isOpen={isOpen} setIsOpen={setIsOpen}>
      <PortfolioContent />
    </Modal>
  );
}

export default PortfolioModal;