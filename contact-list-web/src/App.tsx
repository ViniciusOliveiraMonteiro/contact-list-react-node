import React, { useEffect, useState } from 'react';
import { ContactCard } from './components/contact-card/ContactCard';
import { SearchBar } from './components/search-bar/SearchBar';
import { ButtonIconLarge } from './components/button/ButtonIconLarge';
import { FaUserPlus } from 'react-icons/fa';
import { AppService } from './AppService';

interface ContactCards extends Array<ContactCards> {
  occupation: string;
  created_ar: string;
  company: {
    name: string;
    id: string;
  },
  contact: {
    fullName: string;
    email: string;
    phoneNumber: string;
    id: string;
  }
};

function App() {
  const [contactCards, setContactCards] = useState<ContactCards>([] as any);
  useEffect(() => {
    const service = new AppService();
    (async () => {
      const response = await service.listContact();
      setContactCards(response.data);
    })();
  }, []);
  return (
    <div>
      <div className='d-flex justify-content-center mt-4 mb-5'>
        <SearchBar />
        <ButtonIconLarge buttonText='NOVO CONTATO'>
          <FaUserPlus color='#FFFFFF' size={25} />
        </ButtonIconLarge>
      </div>
      <div className='d-flex justify-content-center flex-wrap'>
        {
          contactCards.map((item, index) => {
            return (
              <ContactCard 
                contactCompany={item.company.name}
                contactEmail={item.contact.email}
                contactEmployment={item.occupation}
                contactName={item.contact.fullName}
                contactPhone={item.contact.phoneNumber}
                key={index}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
