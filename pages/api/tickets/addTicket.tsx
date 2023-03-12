import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from '../auth/[...nextauth]'
import prisma from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res
        .status(401)
        .json({ message: 'Please Signin To Create A New Ticket' })
    }

    const location: string = req.body.location
    const date: string = req.body.date
    const artist: string = req.body.artist
    const genre: string = req.body.genre
    const amount: number = req.body.amount
    const price: number = req.body.price

    // Get User
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email ?? undefined },
    })

    // Check if the input left empty
    if (!location.length || !artist.length ) {
      return res
        .status(403)
        .json({message: 'Please do not leave this empty'}) 
    }

   
 
    if (!prismaUser) {
      return res.status(404).json({ message: 'User not ound' });
    } 
    

    // Create Ticket
    try{
      const result = await prisma.ticket.create({
        data: {
          location,
          date,
          artist,
          genre,
          amount,
          price,
          userId: prismaUser.id,
        },
      })
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({err: 'Error has occurd whilst making a ticket'})
    }
  }
}
