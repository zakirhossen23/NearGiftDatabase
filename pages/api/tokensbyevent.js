import prisma from "../../lib/prisma";

export default async function handle(req, res) {

    const result = await prisma.nftcryptopunk.findMany({
        where: {
            eventid: req.body.id

        }
    });
    res.json(result);
}
