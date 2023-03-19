import DateLayerWrapper from "../components/DateLayerWrapper"

export default function BuyLayout({
  children,
 } : {
    children: React.ReactNode
  }) {
    return (
      <main className='bg-[#EFB8C8] min-h-screen grid place-content-center text-gray-700'>
        {children}
      </main>
    )
  }
