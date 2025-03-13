import React from 'react';
import ReactDOM from 'react-dom';

interface IMessageDrawer {
  isOpen: boolean;
  content: string;
  type?: 'success' | 'error';
}

const MessageDrawer: React.FC<IMessageDrawer> = ({ isOpen, content, type = 'success' }) => {
  const backgroundColor =
    type === 'success'
      ? 'bg-gradient-to-r from-green-600 via-green-500 to-green-400'
      : 'bg-gradient-to-r from-red-600 via-red-500 to-red-400';

  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 left-0 w-full h-[40px] text-center font-extrabold text-md flex items-center text-white justify-center
      ${backgroundColor} opacity-0 transform -translate-y-full 
      transition-transform duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : ''}`}
    >
      {content}
    </div>,
    document.body
  );
};

export default MessageDrawer;
