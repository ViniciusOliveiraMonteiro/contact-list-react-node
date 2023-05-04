import { FaUserPlus } from 'react-icons/fa';
import { SearchBar } from '../../components/search-bar/SearchBar';
import { ButtonIconLarge } from '../../components/button/ButtonIconLarge';
import { ContactDashboard } from '../../components/contact-dashboard/ContactDashboard';
export function ContactPage() {
  
  return (
    <div>
      <div className='d-flex justify-content-center mt-4 mb-5'>
        <SearchBar />
        <ButtonIconLarge buttonText='NOVO CONTATO'>
          <FaUserPlus color='#FFFFFF' size={25} />
        </ButtonIconLarge>
      </div>
      <div>
        <ContactDashboard />
      </div>
    </div>
  );
}