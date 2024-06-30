import { Categories, Container, Filters, SortPopup, Title, TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupLits } from '@/components/shared/products-group-lits';
import { useCategoryStore } from '@/store/category';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/* Фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* Список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupLits
                title='Пиццы'
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupLits
                title='Комбо'
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610E8BBB248F31270BE742B4BD.avif',
                    price: 0,
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
