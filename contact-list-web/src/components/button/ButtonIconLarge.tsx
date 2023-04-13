import { ReactNode } from 'react';
import style from './style.module.css';

interface ButtonIconLargeProps {
  buttonText: string;
  children: ReactNode;
}

export function ButtonIconLarge(props : ButtonIconLargeProps){
  return(
    <div className={`${style.buttonContainer} ms-5 ps-3 pe-3`}>
      {props.children}
      <span className='text-white fs-6 ms-2'>{props.buttonText}</span>
    </div>
  );
}