import { ReactNode, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { VscChromeClose } from "react-icons/vsc";
import { RegisterForm } from '../register-form/RegisterForm';
import { ContactCards } from '../../pages/contact-page/ContactPage';
import style from './style.module.css';

interface ButtonIconLargeProps {
  buttonText: string;
  children: ReactNode;
  setUpdatedState?:React.Dispatch<React.SetStateAction<ContactCards>>;
}

export function ButtonIconLarge(props : ButtonIconLargeProps){
  const [dialogOpen, setDialogOpen] = useState(false);

  return(
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger className={`${style.buttonContainer} ms-5 ps-3 pe-3`}>
        {props.children}
        <span className='text-white fs-6 ms-2'>{props.buttonText}</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={`${style.dialogOverlay}`}/>
        <Dialog.Content className={`${style.dialogContent}`}>
          <Dialog.Title className='fs-4'>
            Cadastrar contato
          </Dialog.Title>
          <RegisterForm 
            dialogState={setDialogOpen}
            setUpdatedState={props.setUpdatedState}
          />
          <Dialog.Close className={`${style.closeButton}`}>
            <VscChromeClose size={20} className='m-1'/>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}