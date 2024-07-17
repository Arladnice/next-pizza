import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { PizzaImage } from './pizza-image';
import { PizzaSize, PizzaType, mapPizzaType, pizzaSizes, pizzaTypes } from '@/shared/constants/pizza';
import { GroupVariants } from './group-variants';
import { Ingredient, ProductItem } from '@prisma/client';
import { IngredientItem } from './ingredient-item';
import { useSet } from 'react-use';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit?: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(30);
  const [type, setType] = React.useState<PizzaType>(1);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));

  const pizzaPrice = items.find((item) => item.size === size && item.pizzaType === type)?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  const totalPrice = pizzaPrice + totalIngredientsPrice;
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;
  const availablePizzas = items.filter((item) => item.pizzaType === type);
  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.value,
    value: item.value,
    disabled: !availablePizzas.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));

  const handleClickAdd = () => {
    // onSubmit?.();
  };

  React.useEffect(() => {
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled);

    if (availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className='w-[490px] bg-[#f6f6f6] p-7'>
        <Title text={name} size='md' className='mb-1 font-extrabold' />

        <p className='text-gray-400'>{textDetails}</p>

        <div className='flex flex-col gap-4 my-5'>
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
          <div className='grid grid-cols-3 gap-3'>
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                className='w-[100px]'
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10' onClick={handleClickAdd}>
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
