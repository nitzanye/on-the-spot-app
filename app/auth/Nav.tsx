import Link from "next/link";
import Login from "./Login";
import Logged from "./Logged";
import { getServerSession } from "next-auth";
import { authOptions } from '../../pages/api/auth/[...nextauth]';

const Nav = async () => {
const session = await getServerSession(authOptions);
console.log(session)

  return (
    <div className='bg-stone-100 py-10 '>
      <nav className='flex justify-around items-center text-sm font-medium tracking-wider uppercase text-stone-500'>
        <Link  className='py-5' href={'/'}>
          <h1 className="flex items-center  font-bold text-lg  ">O-T-S.</h1>
        </Link>
        <ul className='justify-center flex items-center gap-6'></ul>
          {!session?.user && <Login />}
          {session?.user && <Logged image={session.user.image || ''}/>}
      </nav>
    </div>
  );
}

export default Nav;