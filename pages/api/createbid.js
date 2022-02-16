import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    const { Tokenid, Date, UserName, Bidprice } = req.body;
    if (Tokenid) {
        const result = await prisma.tokenbid.create({
            data: {
                Tokenid: Tokenid,
                Date: Date,
                UserName: UserName,
                Bidprice: Bidprice,
            },
        });
        const highestToken = await prisma.nftcryptopunk.findMany({
            where: { id: Tokenid }
        });

        if (Bidprice > highestToken[0].price) {

            await prisma.nftcryptopunk.update({
                where: { id: Tokenid },
                data: {
                    price: Bidprice,
                },
            });
        }


        res.json(result);
    }
    return (
        <>
            <h1>Please use post method</h1>
        </>
    )
}
