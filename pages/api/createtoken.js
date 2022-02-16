import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    const { eventid, name, description, Bidprice, price, type, image } = req.body;
    if (name) {
        const result = await prisma.nftcryptopunk.create({
            data: {
                eventid: eventid,
                name: name,
                description: description,
                Bidprice: Bidprice,
                price: price,
                type: type,
                image: image
            },
        });
        res.json(result);
    }
    return (
        <>
            <h1>Please use post method</h1>
        </>
    )
}
