import React from 'react';
import { ContactCard } from './components/contact-card/ContactCard';
import { SearchBar } from './components/search-bar/SearchBar';
function App() {
  return (
    <div>
      <div className='d-flex justify-content-center mt-4 mb-5'>
        <SearchBar />
      </div>
      <div className='d-flex justify-content-center flex-wrap'>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
}

export default App;
