import { useEffect } from "react";
import { ContactCard } from "../contact-card/ContactCard";
import { ContactDashboardService } from "./ContactDashboardService";
import { ContactCards } from "../../pages/contact-page/ContactPage";

interface ContactDashboardProps {
  updatedState: ContactCards;
  setUpdatedState:React.Dispatch<React.SetStateAction<ContactCards>>;
}

export function ContactDashboard({ updatedState, setUpdatedState }: ContactDashboardProps) {
  
  useEffect(() => {
    const service = new ContactDashboardService();
    const getData = async () => {
      const response = await service.listContact();
      if(response.data){
        setUpdatedState(response.data);
      }
    };
    getData();
  }, [setUpdatedState]);
  return (
    <div className='d-flex justify-content-center flex-wrap'>
      {
        updatedState.map((item, index) => {
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
  );
}