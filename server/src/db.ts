import 'dotenv/config';
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/generated"
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
let db: PrismaClient;

declare global {
	var __db: PrismaClient | undefined;
}

if (!global.__db) {
	global.__db = new PrismaClient({ adapter });
}

db = global.__db;

export { db };
