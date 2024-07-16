import { Container, ProductImage, Title } from '@/components/shared';
import { GroupVariants } from '@/components/shared/group-variants';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });
  console.log(id);

  if (!product) {
    return notFound();
  }

  return (
    <Container className='flex flex-col my-10'>
      <div className='flex flex-1'>
        <ProductImage imageUrl={product.imageUrl} size={40} className='' />

        <div className='w-[490px] bg-[#f6f6f6] p-7'>
          <Title text={product.name} size='sm' className='mb-1 font-extrabold' />

          <p className='text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sit delectus harum sunt. Illo sed quis,
            cumque atque distinctio provident quisquam iusto id aspernatur ducimus quo, laboriosam laudantium fugiat
            facere?
          </p>

          <GroupVariants
            items={[
              { name: 'Маленькая', value: '1' },
              { name: 'Средняя', value: '2' },
              { name: 'Большая', value: '3' },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
