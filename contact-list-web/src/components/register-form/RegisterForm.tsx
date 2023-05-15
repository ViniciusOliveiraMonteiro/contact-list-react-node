import style from './style.module.css';
import { FormEvent, useState } from 'react';
import InputMask from "react-input-mask";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { RegisterFormService } from './RegisterFormService';
import { ContactCards } from '../../pages/contact-page/ContactPage';
import { ContactDashboardService } from '../contact-dashboard/ContactDashboardService';

interface RegisterFormProps {
  dialogState?: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdatedState?:React.Dispatch<React.SetStateAction<ContactCards>>;
}

interface ISubmitForm {
  fullname: string;
  numberPhone: string;
  email: string;
  occupation: string;
  companyName: string;
};

export function RegisterForm(props: RegisterFormProps){
  const [fullName, setFullName] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const service = new RegisterFormService();
  const dashboardService = new ContactDashboardService();
  const validationScheme = Yup.object().shape({
    fullName: Yup.string().required('Nome Completo é obrigatório'),
    numberPhone: Yup.string().trim().required('Telefone é obrigatório'),
  });

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
          mask={numberPhone.replace(/[^\d]/g, '').length >= 6 && numberPhone[3] == '9' ? '99 99999-9999' : '99 9999-9999'} 
          maskPlaceholder={null}
          className={`${style.customInput}`}
          value={numberPhone}
          onChange={(event)=>{
            setNumberPhone(event.target.value);
          }}
          beforeMaskedStateChange={({ nextState })=>{
            let { value } = nextState;
            if(value[0] == '0'){
              value = value.replace(/^0(.+)/, '$1')
            }
            return {
              ...nextState,
              value
            }
          }}
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