import { PrismaClient } from "@prisma/client";
const dbClient = new PrismaClient();

const CARS = [
  {
    price: 123,
    url: "v1712082851/pexels-mike-bird-170811_p9werg.jpg",
    mark: "bmw",
    model: "A4",
    release_year: 2016,
    fuel: "diesel",
    transmission: "manual",
    distance_traveled: 123_456,
  },
  {
    price: 123,
    url: "v1712082851/pexels-mike-bird-116675_oxrfuk.jpg",
    mark: "range rover",
    model: "land road",
    release_year: 2016,
    fuel: "diesel",
    transmission: "manual",
    distance_traveled: 123_456,
  },
  {
    price: 123,
    url: "v1712082851/pexels-mike-bird-244206_tgzjbf.jpg",
    mark: "audi",
    model: "LMAO",
    release_year: 2016,
    fuel: "diesel",
    transmission: "manual",
    distance_traveled: 123_456,
  },
  {
    price: 123,
    url: "v1712082851/pexels-mike-bird-810357_drksro.jpg",
    mark: "mercedes",
    model: "LOL",
    release_year: 2016,
    fuel: "diesel",
    transmission: "manual",
    distance_traveled: 123_456,
  },
  {
    price: 123,
    url: "v1712082851/pexels-aaron-curtis-119435_edwsrf.jpg",
    mark: "jeep",
    model: "A4",
    release_year: 2016,
    fuel: "diesel",
    transmission: "manual",
    distance_traveled: 123_456,
  },
  {
    price: 123,
    url: "v1712082851/pexels-kaan-durmuş-9263456_dredpc.jpg",
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
    const { url, ...car } = CARS[i];

    await dbClient.image.create({
      data: {
        url,
        Car: {
          create: car,
        },
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
