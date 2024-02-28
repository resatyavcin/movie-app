import express from "express";

import { PrismaClient } from "@prisma/client";

const app = express();
const port = 3000;

const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
