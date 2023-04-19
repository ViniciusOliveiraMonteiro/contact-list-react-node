import style from './style.module.css';
import { FormEvent, useState } from 'react';
import InputMask from "react-input-mask";

export function RegisterForm(){
  const [fullName, setFullName] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [companyName, setCompanyName] = useState('');

  function submitFormAction(event: FormEvent){
    event.preventDefault();
    console.log(fullName, numberPhone, email, occupation, companyName);
  }

  return(
    <form onSubmit={submitFormAction} className='d-flex flex-column p-3'>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Nome completo</label>
        <input 
          type="text" 
          className={`${style.customInput}`} 
          value={fullName}
          onChange={(event)=>setFullName(event.target.value)}
        />
      </div>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Telefone</label>
        <InputMask 
          mask={'99 99999 9999'} 
          className={`${style.customInput}`}
          value={numberPhone}
          onChange={(event)=>setNumberPhone(event.target.value)}
        />
      </div>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Email</label>
        <input 
          type="text" 
          className={`${style.customInput}`} 
          value={email}
          onChange={(event)=>setEmail(event.target.value)}
        />
      </div>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Cargo</label>
        <input 
          type="text" 
          className={`${style.customInput}`} 
          value={occupation}
          onChange={(event)=>setOccupation(event.target.value)}
        />
      </div>
      <div className='d-flex flex-column '>
        <label htmlFor="">Empresa</label>
        <input 
          type="text" 
          className={`${style.customInput}`} 
          value={companyName}
          onChange={(event)=>setCompanyName(event.target.value)}
        />
      </div>
      <div className='d-flex justify-content-end mt-4'>
        <button type='submit' className={`${style.submitButton}`}>Cadastrar</button>
      </div>
    </form>
  );
}