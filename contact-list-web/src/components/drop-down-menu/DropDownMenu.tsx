import React, { useState } from 'react';
import { RxDotsVertical } from 'react-icons/rx';
import { MdModeEdit } from 'react-icons/md';
import { FaTrashAlt, FaStar, FaRegStar } from 'react-icons/fa';
import Checkbox from '@mui/material/Checkbox';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import style from './style.module.css';

export function CustomDropDownMenu(){
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (event: any) => {
    console.log(event);
    event.stopPropagation();
  };
  
  const handleOpenChange = (event: boolean) => {
    setIsOpen(event);
  };

  return (
    <DropdownMenu.Root onOpenChange={handleOpenChange}>
      <DropdownMenu.Trigger asChild>
        <button className={`${style.IconButton}`} aria-label="Customise options">
          <RxDotsVertical size={25} color='#A5A5A5'/>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content  className={`${style.DropdownMenuContent}`} sideOffset={5}>
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
            onSelect={handleSelect}
          >
            Favorito
            <div className={`${style.RightSlot}`}>
              <Checkbox icon={<FaRegStar />} checkedIcon={<FaStar />} size='medium' />
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={`${style.DropdownMenuArrow}`}/>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};