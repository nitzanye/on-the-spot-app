import DateLayerWrapper from "../components/DateLayerWrapper"

export default function BuyLayout({
  children,
 } : {
    children: React.ReactNode
  }) {
    return (
      <main className='bg-[#810043] min-h-screen grid place-content-center text-white'>
        {children}
      </main>
    )
  }
