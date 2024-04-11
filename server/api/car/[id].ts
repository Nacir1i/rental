import { Prisma } from "@prisma/client";
import dbClient from "../../utils/prisma";

const defaultSelect = {
  id: false,
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

export default defineEventHandler(
  async (event): Promise<CarWithAlbum | null> => {
    const id = Number(getRouterParam(event, "id"));

    const car = await dbClient.car.findFirst({
      where: {
        id,
      },
      select: defaultSelect,
    });

    return car;
  }
);
