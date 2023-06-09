import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { ContactCards } from '../../pages/contact-page/ContactPage';
import style from './style.module.css';

interface SelectItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

interface DropDownSelectProps {
  onChangeHandle: (value: string) => void;
}


export function DropDownSelect({ onChangeHandle }: DropDownSelectProps) {
  const SelectItem: React.FC<SelectItemProps> = ({ children, className, ...props }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    
    return (
      <Select.Item className={classnames(`${style.SelectItem}`, className)} {...props} ref={ref}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  };
  return (
    <Select.Root onValueChange={onChangeHandle}>
      <Select.Trigger className={`${style.SelectTrigger}`} aria-label="items">
        <Select.Value placeholder="Quantidade de registros" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={`${style.SelectContent}`}>
          <Select.Viewport className={`${style.SelectViewport}`}>
            <Select.Group>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </Select.Group>            
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}