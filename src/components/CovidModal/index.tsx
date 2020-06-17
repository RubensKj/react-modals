import React from 'react';

import Modal from '../Modal';
import CovidContent from '../CovidContent';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const CovidModal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal width='335px' isOpen={isOpen} setIsOpen={setIsOpen}>
      <CovidContent />
    </Modal>
  );
}

export default CovidModal;