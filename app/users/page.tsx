import Link from "next/link";
import { getUsers } from "@/prisma/users";

const Users = async () => {
  const data: {id: string, email: string, name: string, imageUrl: string}[] = await getUsers();
  // console.log("data", data)
  return (
    <main className="flex justify-center flex-col pt-10">
      <h1 className='text-lg m-auto pb-10' >List Of All The Users</h1>
      {data.map((user) => (
          <div className='flex justify-center flex-col ml-auto mr-auto pb-10' key={user.id}>
          <h3>{user.name}</h3>
          <h4>{user.email}</h4>
          <img className='max-w-sm' src={user.imageUrl} />
          </div>
        ))}
      <Link className="bg-[#09312c48] text-white font-medium py-4 px-2 rounded-md  w-64 text-center ml-auto mr-auto"
        href="/">To The Home Page</Link>    
    </main>
  )
}

export default Users;