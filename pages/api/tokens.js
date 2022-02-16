import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    try {
        const result = await prisma.nftcryptopunk.findMany();
        res.json(result);
    } catch (Err) {
        return prisma;
    }

}
