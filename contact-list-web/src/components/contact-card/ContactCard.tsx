import style from './style.module.css';
import img from '../../assets/profilePicture.png';
import { HiMail } from 'react-icons/hi';
import { RxDotsVertical } from 'react-icons/rx'

export function ContactCard() {
  return (
    <>
      <div className={`d-flex flex-column m-2 ${style.cardContainer}`}>
        <div className={`position-relative w-100 `}>
          <img src={img} alt="" className='ms-5'/>
          <div className={`position-absolute top-0 end-0`}>
            <RxDotsVertical size={25} color='#A5A5A5'/>
          </div>
        </div>
        <div className={`mt-3 ${style.userName}`}>
          <span>Angela Moss</span>
        </div>
        <div className={`mb-3 d-flex flex-column`}>
          <span className={`${style.userEmployment}`}>Marketing Manager at</span>
          <span className={`${style.userCompany}`}>Highspeed Studios</span>
        </div>
        <div className={`d-flex flex-column ${style.userContactInfo}`}>
          <div className='d-flex align-items-center mb-2'>
            <div className={`${style.contactIcons} me-3 p-1`}>
              <HiMail size={30} color='#6418C3' />
            </div>
            <span>71 98877 6655</span>
          </div>
          <div className='d-flex align-items-center'>
            <div className={`${style.contactIcons} me-3 p-1`}>
              <HiMail size={30} color='#6418C3' />
            </div>
            <span>angelamoss@mail.com</span>
          </div>
        </div>
      </div>
    </>
  );
}