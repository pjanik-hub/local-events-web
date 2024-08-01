import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

const saltRounds = 10;

export type UserData = {
  name: string;
  email: string;
  password: string;
};

export async function registerUser(params: UserData): Promise<number> {
  try {
    const hashedPassword = await hashPassword(params.password);
    const newUser = await prisma.user.create({
      data: {
        name: params.name,
        email: params.email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
  } catch {
    return 400;
  }

  return 200;
}

async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
}

async function verifyPassword(
  password: string,
  storedHash: string
): Promise<boolean> {
  return bcrypt.compare(password, storedHash);
}
