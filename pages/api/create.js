import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const { title, description, endDate, Goal, logolink, wallet,wallettype ,walletkey} = req.body;
  if (title) {
    const result = await prisma.event.create({
      data: {
        title: title,
        description: description,
        endDate: endDate,
        Goal: Goal,
        logolink: logolink,
        wallet: wallet,
        wallettype: wallettype,
        walletkey:walletkey
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
