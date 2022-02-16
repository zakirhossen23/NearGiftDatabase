import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    const { eventid, title, price, amount, image } = req.body;
    if (title) {
        const result = await prisma.eventcategories.create({
            data: {
                eventid: eventid,
                title: title,
                price: price,
                amount: amount,
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
