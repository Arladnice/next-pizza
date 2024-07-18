import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSize, PizzaType } from '../constants/pizza';

/**
 * Функция для подсчета общей стоимости пиццы
 *
 * @param type - тип теста выбранной пиццы
 * @param size - размер выбранной пиццы
 * @param items - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 *
 * @returns number общую стоимость
 */

export const calcTotalPizzaPrice = (
  items: ProductItem[],
  size: PizzaSize,
  type: PizzaType,
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice = items.find((item) => item.size === size && item.pizzaType === type)?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  const totalPrice = pizzaPrice + totalIngredientsPrice;

  return totalPrice;
};
