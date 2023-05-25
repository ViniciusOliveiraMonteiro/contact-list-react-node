import style from './style.module.css';
import { useEffect, useRef, useState } from 'react';
import InputMask from "react-input-mask";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { RegisterFormService } from './RegisterFormService';
import { ContactCards } from '../../pages/contact-page/ContactPage';
import { ContactDashboardService } from '../contact-dashboard/ContactDashboardService';

interface RegisterFormProps {
  dialogState?: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdatedState?: React.Dispatch<React.SetStateAction<ContactCards>>;
}

interface ISubmitForm {
  fullName: string;
  numberPhone: string;
  email: string;
  occupation: string;
  companyName: string;
};
export function RegisterForm(props: RegisterFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    numberPhone: '',
    email: '',
    occupation: '',
    companyName: '',
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const {
    fullName,
    numberPhone,
    email,
    occupation,
    companyName
  } = formData;

  const service = new RegisterFormService();
  const dashboardService = new ContactDashboardService();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Nome Completo é obrigatório'),
    numberPhone: Yup.string().required('Telefone é obrigatório'),
    email: Yup.string().required('Email é obrigatório').email('Este email é inválido'),
    occupation: Yup.string().required('Cargo é obrigatório'),
    companyName: Yup.string().required('Empresa é obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ISubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    if(Object.values(formData).every(str => str.trim().length)){
      setButtonDisabled(false);
    }
  }

  async function submitFormAction() {
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
        props.setUpdatedState(dashboardResponse.data);
      }
      props.dialogState(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitFormAction)} className='d-flex flex-column p-3'>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Nome completo</label>
        <input
          type="text"
          className={`form-control ${style.customInput} ${errors.fullName ? 'is-invalid' : ''}`}
          value={fullName}
          {...register('fullName', {
            onChange: handleChange
          })}

        />
        <div className="invalid-feedback">{errors.fullName?.message}</div>
      </div>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Telefone</label>
        <InputMask
          mask={numberPhone.replace(/[^\d]/g, '').length >= 6 && numberPhone[3] === '9' ? '99 99999-9999' : '99 9999-9999'}
          maskPlaceholder={null}
          className={`form-control ${style.customInput} ${errors.numberPhone ? 'is-invalid' : ''}`}
          value={numberPhone}
          {...register('numberPhone', {
            onChange: handleChange
          }
          )}
          beforeMaskedStateChange={({ nextState }) => {
            let { value } = nextState;
            if (value[0] === '0') {
              value = value.replace(/^0(.+)/, '$1')
            }
            return {
              ...nextState,
              value
            }
          }}
        />
        <div className="invalid-feedback">{errors.numberPhone?.message}</div>
      </div>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Email</label>
        <input
          type="text"
          className={`form-control ${style.customInput} ${errors.email ? 'is-invalid' : ''}`}
          value={email}
          {...register('email', {
            onChange: handleChange
          })}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Cargo</label>
        <input
          type="text"
          className={`form-control ${style.customInput} ${errors.occupation ? 'is-invalid' : ''}`}
          value={occupation}
          {...register('occupation', {
            onChange: handleChange
          })}

        />
        <div className="invalid-feedback">{errors.occupation?.message}</div>
      </div>
      <div className='d-flex flex-column '>
        <label htmlFor="">Empresa</label>
        <input
          type="text"
          className={`form-control ${style.customInput} ${errors.occupation ? 'is-invalid' : ''}`}
          value={companyName}
          {...register('companyName', {
            onChange: handleChange
          })}
        />
        <div className="invalid-feedback">{errors.companyName?.message}</div>
      </div>
      <div className='d-flex justify-content-end mt-4'>
        <button type='submit' disabled={buttonDisabled} className={`${style.submitButton}`}>Cadastrar</button>
      </div>
    </form>
  );
}