import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from '../auth/[...nextauth]'
import prisma from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).json({ message: 'Please Signin' })
    
    // Delete a ticket
    try {
      const ticketId = req.body
      const result = await prisma.ticket.delete({
        where: {
          id: ticketId
        },
      })
      res.status(200).json(result)
    } catch (err) {
        res.status(403).json({err: 'Error has occurd while deleting a ticket'})
      }
    }
}