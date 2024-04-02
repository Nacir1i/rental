import dbClient from "../../utils/prisma";

export default defineEventHandler(async (_event) => {
    const data = await dbClient.car.findMany();
    return data;
})