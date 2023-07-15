import React, { useState } from 'react';
import { RxDotsVertical } from 'react-icons/rx';
import { MdModeEdit } from 'react-icons/md';
import { FaTrashAlt, FaStar, FaRegStar } from 'react-icons/fa';
import Checkbox from '@mui/material/Checkbox';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ContactPageService } from '../../pages/contact-page/ContactPageService';

import style from './style.module.css';

interface CustomDropDownMenuProps {
  isFavorite: boolean;
  contactId: string;
}

export function CustomDropDownMenu(props : CustomDropDownMenuProps){
  const service = new ContactPageService();
  const [isFavorite, setFavorite] = useState(props.isFavorite);

  const handleDropdownItemClick = async (event: Event, id: string) => {
    event.preventDefault();
    const data = {
      id: id
    }
    const response = await service.toggleFavorite(data);
    setFavorite(response.data.isFavorite);
  };

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button className={`${style.IconButton}`} aria-label="Customise options">
          <RxDotsVertical size={25} color='#A5A5A5'/>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={`${style.DropdownMenuContent}`} sideOffset={5}>
          <DropdownMenu.Item className={`${style.DropdownMenuItem}`}>
            Editar contato 
            <div className={`${style.RightSlot}`}>
              <MdModeEdit/>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={`${style.DropdownMenuItem}`}>
            Excluir contato 
            <div className={`${style.RightSlot}`}>
              <FaTrashAlt/>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item 
            className={`${style.DropdownMenuItem}`}
            onSelect={(event) => handleDropdownItemClick(event, props.contactId)}
          >
            Favorito
            <div className={`${style.RightSlot}`}>
              <Checkbox 
                icon={!isFavorite ? <FaRegStar /> : <FaStar />} 
                checkedIcon={isFavorite ? <FaStar /> : <FaRegStar />} 
                size='medium'
                checked={isFavorite}
               />
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={`${style.DropdownMenuArrow}`}/>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};