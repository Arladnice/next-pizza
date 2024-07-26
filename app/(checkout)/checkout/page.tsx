'use client';

import { CheckoutItem, CheckoutItemDetails, Container, Title, WhiteBlock } from '@/shared/components/shared';
import { Button, Input, Textarea } from '@/shared/components/ui';
import { useCart } from '@/shared/hooks';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import React from 'react';

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();

  return (
    <Container className='mt-10'>
      <Title text='Оформление заказа' className='font-extrabold mb-8 text-[36px]' />
      <div className='flex gap-10'>
        {/* Левая часть */}
        <div className='flex flex-col gap-10 flex-1 mb-20'>
          <WhiteBlock title='1. Корзина'>
            <div className='flex flex-col gap-5'>
              <CheckoutItem
                id={1}
                imageUrl={'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp'}
                details={'Сырная Сырная Сырная'}
                name={'Сырная'}
                price={216}
                quantity={3}
              />
              <CheckoutItem
                id={1}
                imageUrl={'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp'}
                details={'Сырная Сырная Сырная'}
                name={'Сырная'}
                price={216}
                quantity={3}
              />
            </div>
          </WhiteBlock>

          <WhiteBlock title='2. Персональные данные'>
            <div className='grid grid-cols-2 gap-5'>
              <Input name='fistName' className='text-base' placeholder='Имя' />
              <Input name='lastName' className='text-base' placeholder='Фамилия' />
              <Input name='email' className='text-base' placeholder='E-mail' />
              <Input name='phone' className='text-base' placeholder='Телефон' />
            </div>
          </WhiteBlock>

          <WhiteBlock title='3. Адрес доставки'>
            <div className='flex flex-col gap-5'>
              <Input name='fistName' className='text-base' placeholder='Введите адрес' />
              <Textarea rows={5} className='text-base' placeholder='Комментарий к заказу' />
            </div>
          </WhiteBlock>
        </div>
        {/* Правая часть */}
        <div className='w-[450px]'>
          <WhiteBlock className='p-6 sticky top-4'>
            <div className='flex flex-col gap-1'>
              <span className='text-xl'>Итого:</span>
              <span className='text-[34px] font-extrabold'>3550 ₽</span>
            </div>

            <CheckoutItemDetails
              value='3000 ₽'
              title={
                <div className='flex items-center'>
                  <Package size={18} className='mr-2 text-gray-300' />
                  Стоимость товаров:
                </div>
              }
            />
            <CheckoutItemDetails
              value='3000 ₽'
              title={
                <div className='flex items-center'>
                  <Percent size={18} className='mr-2 text-gray-300' />
                  Налоги:
                </div>
              }
            />
            <CheckoutItemDetails
              value='3000 ₽'
              title={
                <div className='flex items-center'>
                  <Truck size={18} className='mr-2 text-gray-300' />
                  Доставка:
                </div>
              }
            />
            <Button type='submit' className='w-full h-14 rounded-2xl mt-6 text-base font-bold'>
              Перейти к оплате
              <ArrowRight className='w-5 ml-2' />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
