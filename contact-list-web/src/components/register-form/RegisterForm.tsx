import style from './style.module.css';

export function RegisterForm(){
  return(
    <form action="" className='d-flex flex-column p-3'>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Nome completo</label>
        <input type="text" className={`${style.customInput}`} />
      </div>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Telefone</label>
        <input type="text" className={`${style.customInput}`} />
      </div>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Email</label>
        <input type="text" className={`${style.customInput}`} />
      </div>
      <div className='d-flex flex-column mb-2'>
        <label htmlFor="">Cargo</label>
        <input type="text" className={`${style.customInput}`} />
      </div>
      <div className='d-flex flex-column '>
        <label htmlFor="">Empresa</label>
        <input type="text" className={`${style.customInput}`} />
      </div>
    </form>
  );
}