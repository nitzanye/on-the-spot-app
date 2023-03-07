import type { NextApiRequest, NextApiResponse } from "next";

import prisma from '../../prisma/client';

type userProps = {
    id: string;
    name: string;
    email: string;
    imageUrl: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user: userProps  = JSON.parse(req.body)
    if (req.method === "POST") {
      // Check for email
      // if(!email.length) {
      //   return status(500).json({message: 'Fill the Email input'})
      // }
      try {
        const data = await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            imageUrl: user.imageUrl
          } 
        })
        res.status(200).json(data);
      } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Error creating a new user"})
      }
    }
 } catch (error) {
    console.log(error);
    // return res.status(500).json(error)
  }
}