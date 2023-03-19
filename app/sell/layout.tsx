export default function SellLayout({
  children,
 } : {
    children: React.ReactNode
  }) {
    return (
      <main className='bg-[#0e555a] min-h-screen grid place-content-center text-white'>
          {children}
      </main>
    )
  }