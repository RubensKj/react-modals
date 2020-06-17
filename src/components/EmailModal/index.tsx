import React from 'react';

import Modal from '../Modal';
import EmailContent from '../EmailContent';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const EmailModal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal width='335px' isOpen={isOpen} setIsOpen={setIsOpen}>
      <EmailContent />
    </Modal>
  );
}

export default EmailModal;