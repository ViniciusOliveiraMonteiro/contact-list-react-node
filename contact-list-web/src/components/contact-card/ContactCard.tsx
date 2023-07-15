import style from './style.module.css';
import img from '../../assets/profilePicture.png';
import { HiMail } from 'react-icons/hi';
import { FaPhoneAlt } from "react-icons/fa";
import { CustomDropDownMenu } from '../drop-down-menu/DropDownMenu';

interface ContactCardProps {
  contactName: string;
  contactEmployment: string;
  contactCompany: string;
  contactPhone: string;
  contactEmail: string;
  is_favorite: boolean;
  contactId: string;
}

export function ContactCard(props: ContactCardProps) {
  return (
    <>
      <div className={`d-flex flex-column m-2 ${style.cardContainer}`}>
        <div className={`position-relative w-100 `}>
          <img src={img} alt="" className='ms-5'/>
          <div role="button" className={`position-absolute top-0 end-0`}>
            <CustomDropDownMenu isFavorite={props.is_favorite} contactId={props.contactId}/>
          </div>
        </div>
        <div className={`mt-3 ${style.userName}`}>
          <span>{props.contactName}</span>
        </div>
        <div className={`mb-3 d-flex flex-column`}>
          <span className={`${style.userEmployment}`}>{props.contactEmployment} em</span>
          <span className={`${style.userCompany}`}>{props.contactCompany}</span>
        </div>
        <div className={`d-flex flex-column ${style.userContactInfo}`}>
          <div className='d-flex align-items-center mb-2'>
            <div className={`${style.contactIcons} me-3 p-1`}>
              <FaPhoneAlt size={30} color='#6418C3' className='p-1' />
            </div>
            <span>{props.contactPhone}</span>
          </div>
          <div className='d-flex align-items-center'>
            <div className={`${style.contactIcons} me-3 p-1`}>
              <HiMail size={30} color='#6418C3' />
            </div>
            <span>{props.contactEmail}</span>
          </div>
        </div>
      </div>
    </>
  );
}