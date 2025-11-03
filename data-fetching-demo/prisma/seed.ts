import { PrismaClient, Prisma } from '../app/generated/prisma/client';

const prisma = new PrismaClient();

const productData: Prisma.ProductCreateInput[] = [
  { title: 'Product 1', price: 500, description: 'Description 1' },
  { title: 'Product 2', price: 700, description: 'Description 2' },
  { title: 'Product 3', price: 1000, description: 'Description 3' },
];

export async function main() {
  for (const p of productData) {
    await prisma.product.create({ data: p });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
