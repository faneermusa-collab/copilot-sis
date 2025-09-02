import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const org1 = await prisma.organization.create({
    data: { name: 'Organization 1', logo: 'logo1.png' },
  });
  console.log(org1);

  const org2 = await prisma.organization.create({
    data: { name: 'Organization 2', logo: 'logo2.png' },
  });
  console.log(org2);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
