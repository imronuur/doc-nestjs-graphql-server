import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const doctor = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@gmail.com',
      password: '123456',
    },
  });

  console.log({ doctor });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
