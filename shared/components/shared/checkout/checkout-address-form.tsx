import React from 'react';
import { WhiteBlock } from '../white-block';
import { Input, Textarea } from '../../ui';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title='3. Адрес доставки' className={className}>
      <div className='flex flex-col gap-5'>
        <Input name='fistName' className='text-base' placeholder='Введите адрес' />
        <Textarea rows={5} className='text-base' placeholder='Комментарий к заказу' />
      </div>
    </WhiteBlock>
  );
};
