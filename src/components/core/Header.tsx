import React from 'react'
import clsx from 'clsx';

type HeadProps = {
  children?: React.ReactNode;
  className?: string;
}
const Header = ({ children, className }: HeadProps) => {
  return (
    <header className={clsx('bg-[#43464d] p-8 flex gap-4 justify-center text-white', className)}>
      {children}
    </header>
  )
}

export default Header