import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = [];
  users.push(
    await prisma.user.create({
      data: {
        name: "bob",
        posts: {
          create: [
            {
              title: "first",
              content: "first content",
            },
            {
              title: "second",
              content: "second content",
            },
          ],
        },
      },
    })
  );

  users.push(
    await prisma.user.create({
      data: {
        name: "bib",
        posts: {
          create: [
            {
              title: "bfirst",
              content: "bfirst content",
            },
            {
              title: "bsecond",
              content: "bsecond content",
            },
          ],
        },
      },
    })
  );

  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
