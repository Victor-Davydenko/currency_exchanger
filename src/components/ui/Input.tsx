'use client'

import React, {ChangeEvent, FC, ReactNode} from 'react';

interface InputProps {
  label: string,
  handler: (e: ChangeEvent<HTMLInputElement>) => void,
  className: string
  id: string,
  type: string,
  value: string
  step?: string
  min?: string
  max?: string
  icon?: ReactNode
}

const Input: FC<InputProps> = ({ label, icon, id, handler, ...attrs }) => {
  return (
    <div className='relative'>
      {icon}
      {label && <label htmlFor={id} className='absolute -top-[30px] text-xl text-primary'>{label}</label>}
      <input id={id} {...attrs} onChange={handler}/>
    </div>
  );
};

export default Input;