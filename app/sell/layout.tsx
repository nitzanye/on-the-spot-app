export default function SellLayout({
  children,
 } : {
    children: React.ReactNode
  }) {
    return (
      <main className='bg-[#0d3b35] min-h-screen grid place-content-center text-white'>
          {children}
      </main>
    )
  }