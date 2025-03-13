import React from 'react';
import ReactDOM from 'react-dom';

interface IMessageDrawer {
  isOpen: boolean;
  content: string;
}

const MessageDrawer: React.FC<IMessageDrawer> = ({ isOpen, content }) => {
  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 left-0 w-full h-[40px] text-center font-extrabold text-md flex items-center text-white justify-center
      bg-gradient-to-r from-[#020024] via-[#ec4a2e] to-[#ec1f1f] opacity-0 transform -translate-y-full 
      transition-transform duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : ''}`}
    >
      {content}
    </div>,
    document.body
  );
};

export default MessageDrawer;
