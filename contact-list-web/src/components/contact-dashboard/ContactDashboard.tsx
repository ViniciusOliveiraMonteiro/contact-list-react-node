import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { ContactCard } from "../contact-card/ContactCard";
import { ContactDashboardService } from "./ContactDashboardService";
import { ContactCards } from "../../pages/contact-page/ContactPage";
import { DropDownSelect } from "../select/DropDownSelect";

interface ContactDashboardProps {
  updatedState: ContactCards;
  setUpdatedState: React.Dispatch<React.SetStateAction<ContactCards>>;
}

export function ContactDashboard({ updatedState, setUpdatedState }: ContactDashboardProps) {
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState('5');
  useEffect(() => {
    const service = new ContactDashboardService();
    const getData = async () => {
      const response = await service.listContact();
      if (response.data) {
        setTotalPages(response.totalPages);
        setUpdatedState(response.data);
      }
    };
    getData();
  }, [setUpdatedState]);

  async function requestData(page: number, pageSize: number){
    const service = new ContactDashboardService();
    const response = await service.listContact(page, +pageSize);
    if (response.data) {
      setTotalPages(response.totalPages);
      setUpdatedState(response.data);
    }
  }

  async function selectPageSize(value: string) {
    setPageSize(value);
    await requestData(1, +value);
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-end me-3 mb-3">
        <DropDownSelect onChangeHandle={selectPageSize} />
      </div>
      <div className='d-flex justify-content-center flex-wrap'>
        {
          updatedState.map((item, index) => {
            return (
              <ContactCard
                contactCompany={item.company.name}
                contactEmail={item.contact.email}
                contactEmployment={item.occupation}
                contactName={item.contact.formatedName}
                contactPhone={item.contact.phoneNumber}
                key={index}
              />
            );
          })
        }
      </div>
      <div className={`position-absolute bottom-0 end-0`}>
        <Pagination count={totalPages} onChange={async (event, page) => {
          await requestData(page, +pageSize)
        }} />
      </div>
    </div>
  );
}