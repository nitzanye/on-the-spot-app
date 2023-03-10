import Link from "next/link";
import Login from "./Login";
import Logged from "./Logged";
import { getServerSession } from "next-auth";
import { authOptions } from '../../pages/api/auth/[...nextauth]';

const Nav = async () => {
const session = await getServerSession(authOptions);
console.log(session)

  return (
    <div className='bg-stone-100 py-10'>
      <nav className='container flex  text-sm font-medium tracking-wider uppercase text-stone-500'>
        <Link  className='items-center py-5' href={'/'}>
          <h1 className=" flex ml-auto items-center justify-center font-bold text-lg ">Send it.</h1>
        </Link>
        <ul className='ml-auto flex  items-center gap-6'></ul>
          {!session?.user && <Login />}
          {session?.user && <Logged image={session.user.image || ''}/>}
      </nav>
    </div>
  );
}

export default Nav;