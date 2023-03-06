import Link from "next/link";


export default function Home() {
  return (
    <main className="flex justify-center flex-col pt-10 ">
      <h1 className='text-lg m-auto pb-10 '>On The Spot</h1> 
      <div className="flex justify-center gap-8 items-center">
        <Link
        className="bg-[#f472b6] text-black font-medium py-4 px-4 rounded-md flex-2 w-64 text-center"
        href='/buy'
        >Buy</Link>
        <Link 
        className="bg-[#2dd4bf] text-black font-medium py-4 px-4 rounded-md flex-2 w-64 text-center"
        href='/sell'
        >Sell</Link>
      </div>
    </main>
  )
}
