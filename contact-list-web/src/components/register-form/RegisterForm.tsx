import style from './style.module.css';
import { FormEvent, useState } from 'react';
import InputMask from "react-input-mask";
import { RegisterFormService } from './RegisterFormService';
import { ContactCards } from '../../pages/contact-page/ContactPage';
import { ContactDashboardService } from '../contact-dashboard/ContactDashboardService';

interface RegisterFormProps {
  dialogState?: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdatedState?:React.Dispatch<React.SetStateAction<ContactCards>>;
}

export function RegisterForm(props: RegisterFormProps){
  const [fullName, setFullName] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const service = new RegisterFormService();
  const dashboardService = new ContactDashboardService();

  async function submitFormAction(event: FormEvent){
    event.preventDefault();
    const data = {
      contactFullName: fullName,
      contactEmail: email,
      companyName: companyName,
      contactPhoneNumber: numberPhone,
      contactOccupation: occupation
    };
    const response = await service.registerContact(data);
    const dashboardResponse = await dashboardService.listContact();
    if((props.dialogState && response.success)){
      if(props.setUpdatedState && dashboardResponse.data){
        console.log(dashboardResponse, dashboardResponse.data);
        props.setUpdatedState(dashboardResponse.data);
      }
      props.dialogState(false);
    }
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