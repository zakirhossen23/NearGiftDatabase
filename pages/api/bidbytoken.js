import prisma from "../../lib/prisma";

export default async function handle(req, res) {

    const result = await prisma.tokenbid.findMany({
        where: {
            Tokenid: req.body.id

        }
    });
    res.json(result);
}
