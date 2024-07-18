import { Ingredient, ProductItem } from '@prisma/client';
import { calcTotalPizzaPrice } from './calc-total-pizza-price';
import { PizzaSize, PizzaType, mapPizzaType } from '../constants/pizza';

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;
  const totalPrice = calcTotalPizzaPrice(items, size, type, ingredients, selectedIngredients);

  return { textDetails, totalPrice };
};
