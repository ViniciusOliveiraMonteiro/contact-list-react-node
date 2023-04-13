import React from 'react';
import { ContactCard } from './components/contact-card/ContactCard';
import { SearchBar } from './components/search-bar/SearchBar';
import { ButtonIconLarge } from './components/button/ButtonIconLarge';
import { FaUserPlus } from 'react-icons/fa';

function App() {
  return (
    <div>
      <div className='d-flex justify-content-center mt-4 mb-5'>
        <SearchBar />
        <ButtonIconLarge buttonText='NOVO CONTATO'>
          <FaUserPlus color='#FFFFFF' size={25}/>
        </ButtonIconLarge>
      </div>
      <div className='d-flex justify-content-center flex-wrap'>
        <ContactCard 
          contactName='Michele Monteiro'
          contactEmployment='Confeccionista'
          contactCompany='AMaria Store'
          contactEmail='mi.monteiro@mail.com'
          contactPhone='11 98877 6655'
        />
        <ContactCard 
          contactName='Michele Monteiro'
          contactEmployment='Confeccionista'
          contactCompany='AMaria Store'
          contactEmail='mi.monteiro@mail.com'
          contactPhone='11 98877 6655'
        />
        <ContactCard 
          contactName='Michele Monteiro'
          contactEmployment='Confeccionista'
          contactCompany='AMaria Store'
          contactEmail='mi.monteiro@mail.com'
          contactPhone='11 98877 6655'
        />
        <ContactCard 
          contactName='Michele Monteiro'
          contactEmployment='Confeccionista'
          contactCompany='AMaria Store'
          contactEmail='mi.monteiro@mail.com'
          contactPhone='11 98877 6655'
        />
        <ContactCard 
          contactName='Michele Monteiro'
          contactEmployment='Confeccionista'
          contactCompany='AMaria Store'
          contactEmail='mi.monteiro@mail.com'
          contactPhone='11 98877 6655'
        />
      </div>
    </div>
  );
}

export default App;
