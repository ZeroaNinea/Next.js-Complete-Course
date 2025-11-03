import { PrismaClient } from '@/app/generated/prisma/client';
const prisma = new PrismaClient();

export async function getProducts(query?: string) {
  await new Promise((res) => setTimeout(res, 1500));
  return prisma.product.findMany({
    where: query
      ? {
          OR: [
            { title: { contains: query } },
            { description: { contains: query } },
          ],
        }
      : {},
  });
}
