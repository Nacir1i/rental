import { Prisma } from "@prisma/client";
import dbClient from "../../utils/prisma";

const defaultSelect = {
  id: true,
  price: true,
  mark: true,
  model: true,
  release_year: true,
  fuel: true,
  transmission: true,
  distance_traveled: true,
  createdAt: true,
  updatedAt: true,
  album: true,
} satisfies Prisma.CarSelect;

export type CarWithAlbum = Prisma.CarGetPayload<{
  select: typeof defaultSelect;
}>;

export default defineEventHandler(async (_event): Promise<CarWithAlbum[]> => {
  const data = await dbClient.car.findMany({
    select: defaultSelect,
    orderBy: {
        createdAt: 'desc'
    },
    take: 6
  });
  return data;
});
