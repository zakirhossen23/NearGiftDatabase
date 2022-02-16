import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.event.findMany();
  res.json(result);
}
