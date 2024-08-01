/**
 * The purpose of this file is to create a singleton
 * for the prisma db interface
 *
 * I <3 dependancy injection
 */

import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// DI prisma as a singleton
export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
