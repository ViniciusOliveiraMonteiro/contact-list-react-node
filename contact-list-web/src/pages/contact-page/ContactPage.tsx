import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { SearchBar } from '../../components/search-bar/SearchBar';
import { ButtonIconLarge } from '../../components/button/ButtonIconLarge';
import { ContactDashboard } from '../../components/contact-dashboard/ContactDashboard';

export interface ContactCards extends Array<ContactCards> {
  occupation: string;
  created_ar: string;
  company: {
    name: string;
    id: string;
  },
  contact: {
    fullName: string;
    formatedName: string;
    email: string;
    phoneNumber: string;
    id: string;
    is_favorite: boolean;
  },
};

export function ContactPage() {
  const [contactCards, setContactCards] = useState<ContactCards>([] as any);
  return (
    <div>
      <div className='d-flex justify-content-center mt-4 mb-5'>
        <SearchBar />
        <ButtonIconLarge 
          buttonText='NOVO CONTATO'
          setUpdatedState={setContactCards}
        >
          <FaUserPlus color='#FFFFFF' size={25} />
        </ButtonIconLarge>
      </div>
      <div>
        <ContactDashboard 
          updatedState={contactCards}
          setUpdatedState={setContactCards}
        />
      </div>
    </div>
  );
}