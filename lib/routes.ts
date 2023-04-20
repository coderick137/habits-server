import { prisma } from './prisma';
import { FastifyInstance } from 'fastify';

export async function appRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    return await prisma.habit.findMany();
  });
  
}