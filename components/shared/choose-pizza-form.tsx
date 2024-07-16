import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { PizzaImage } from './pizza-image';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any;
  items?: any;
  loading?: boolean;
  onSubmit?: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  loading,
  onSubmit,
  className,
}) => {
  const textDetails = '30 см, традиционное тесто 30';
  const totalPrice = 350;
  const siza = 30;

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage imageUrl={imageUrl} size={siza} />
      <div className='w-[490px] bg-[#f6f6f6] p-7'>
        <Title text={name} size='md' className='mb-1 font-extrabold' />

        <p className='text-gray-400'>{textDetails}</p>

        <Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
