// import type { NextApiRequest, NextApiResponse } from "next";

// import prisma from '../../prisma/client';

// type Data = {
//   data: {
//     id: string;
//     email: string;
//     name: string;
//     image: string;
//   }[];
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   try {
//     // Get Prisma to fetch users
//     const data  = await prisma.user.findMany();
//     return res.status(200).json(data)
//   } catch (error) {
//     console.log(error);
//     // return res.status(500).json(error)
//   }
// }