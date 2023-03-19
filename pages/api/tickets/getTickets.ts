import type { NextApiRequest, NextApiResponse } from "next";

import prisma from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {

    // Fetch all Ticket - Only if its ADMIN
    // if not fetch only the data that comes in the specifiqe req of the user (after BUY btn was clicked)
    
    
    // filter by incoming shows - date !
    try {
      const data = await prisma.ticket.findMany({
        include: {
          user: true,
        },
        orderBy: { 
          date: 'desc',
        },
      })
      res.status(200).json(data);
    } catch (err) {
      res.status(403).json({err: 'Error fetching tickets'})
    }
  }
}


// const currentDate = new Date().toISOString();
// try {
//   const data = await prisma.ticket.findMany({
//     include: {
//       user: true,
//     },
//     where: {
//       date: {
//         gte: currentDate,
//       },
//     },
//     orderBy: { 
//       date: 'desc',
//     },
//   })
//   res.status(200).json(data);
// } catch (err) {
//   res.status(403).json({err: 'Error fetching tickets'})
// }