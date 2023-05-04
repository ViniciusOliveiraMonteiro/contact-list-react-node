import { useEffect, useState } from "react";
import { ContactCard } from "../contact-card/ContactCard";
import { ContactDashboardService } from "./ContactDashboardService";

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

export function ContactDashboard() {
  const [contactCards, setContactCards] = useState<ContactCards>([] as any);
  useEffect(() => {
    const service = new ContactDashboardService();
    const getData = async () => {
      const response = await service.listContact();
      setContactCards(response.data);
    };
    getData();
  }, []);
  return (
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
  );
}