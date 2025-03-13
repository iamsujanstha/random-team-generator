import Button from '@components/Button';
import Input from '@components/Input';
import React, { useState } from 'react'

type HeadProps = {
  children?: React.ReactNode;
}
const Header = ({ children }: HeadProps) => {
  const [name, setName] = useState('')
  return (
    <header className='flex w-full bg-[#43464d] p-8 justify-center'>
      {children}
      <div className='flex w-96 gap-4'>
        <Input
          className=' bg-white'
          placeholder='Add title'
          onChange={(name) => setName(name)}
          value={name}
        />
        <Button label='Add Title' />
      </div>
    </header>
  )
}

export default Header