export default function AboutLayout({
  children,
 } : {
    children: React.ReactNode
  }) {
    return (
      <main className='bg-[#333] min-h-screen grid place-content-center text-white'>
      
          {children}
      </main>
    )
  }