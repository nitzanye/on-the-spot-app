export default function SellLayout({
  children,
 } : {
    children: React.ReactNode
  }) {
    return (
      <main className='bg-[#D0BCFF] min-h-screen grid place-content-center text-white'>
          {children}
      </main>
    )
  }