import { PrismaClient } from "@prisma/client";
const dbClient = new PrismaClient();

type CarInfo = {
  price: number;
  urls: { url: string }[];
  mark: string;
  model: string;
  release_year: number;
  fuel: string;
  transmission: string;
  distance_traveled: number;
};
const PROVIDER_PREFIX = "v1712082851"

const CARS: CarInfo[] = [
  {
    price: 123,
    urls: [
      {
        url: PROVIDER_PREFIX + "/bmw-1.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/bmw-2.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/bmw-3.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/bmw-4.jpg"
      },
    ],
    mark: "bmw",
    model: "A4",
    release_year: 2016,
    fuel: "diesel",
    transmission: "manual",
    distance_traveled: 123_456,
  },
  {
    price: 123,
    urls: [
      {
        url: PROVIDER_PREFIX + "/range-1.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/range-2.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/range-3.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/range-4.jpg"
      },
    ],
    mark: "range rover",
    model: "land road",
    release_year: 2016,
    fuel: "diesel",
    transmission: "manual",
    distance_traveled: 123_456,
  },
  {
    price: 123,
    urls: [
      {
        url: PROVIDER_PREFIX + "/audi-1.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/audi-2.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/audi-3.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/audi-4.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/audi-5.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/audi-6.jpg"
      },
    ],
    mark: "audi",
    model: "LMAO",
    release_year: 2016,
    fuel: "diesel",
    transmission: "manual",
    distance_traveled: 123_456,
  },
  {
    price: 123,
    urls: [
      {
        url: PROVIDER_PREFIX + "/mercedes-1.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/mercedes-2.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/mercedes-3.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/mercedes-4.jpg"
      },
    ],
    mark: "mercedes",
    model: "LOL",
    release_year: 2016,
    fuel: "diesel",
    transmission: "manual",
    distance_traveled: 123_456,
  },
  {
    price: 123,
    urls: [
      {
        url: PROVIDER_PREFIX + "/jeep-1.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/jeep-2.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/jeep-3.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/jeep-4.jpg"
      },
    ],
    mark: "jeep",
    model: "A4",
    release_year: 2016,
    fuel: "diesel",
    transmission: "manual",
    distance_traveled: 123_456,
  },
  {
    price: 123,
    urls: [
      {
        url: PROVIDER_PREFIX + "/dacia-1.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/dacia-2.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/dacia-3.jpg"
      },
      {
        url: PROVIDER_PREFIX + "/dacia-4.jpg"
      },
    ],
    mark: "dacia",
    model: "A4",
    release_year: 2016,
    fuel: "diesel",
    transmission: "manual",
    distance_traveled: 123_456,
  },
];

async function main() {
  for (let i = 0; i < CARS.length; i++) {
    const { urls, ...car } = CARS[i];

    await dbClient.car.create({
      data: {
        ...car,
        album: {
          createMany: {
            data: urls
          }
        }
      },
    });
  }
}

main()
  .then(async () => {
    await dbClient.$disconnect();

    // Implement a logger
    console.log("DB was seeded successfully")
  })
  .catch(async (e) => {
    console.error(e);
    await dbClient.$disconnect();
    process.exit(1);
  });
