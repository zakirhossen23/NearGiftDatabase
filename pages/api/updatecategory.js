import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    const { id } = req.body;
    if (id) {
        const selectedCategories = await prisma.eventcategories.findMany({
            where: { id: id }
        });
        const perpeice =  parseInt(selectedCategories[0].price/ selectedCategories[0].amount);
        const result =    await prisma.eventcategories.update({
                where: { id: id },
                data: {
                    price: Number(selectedCategories[0].price)-perpeice,
                    amount:  Number(selectedCategories[0].amount)-1,
                   
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
