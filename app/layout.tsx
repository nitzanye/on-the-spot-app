import './globals.css'
import { montserrat } from './utils/constance';
import Header from './header';
import Footer from './footer';

export const metadata = {
  title: 'On The Spot App',
  description: 'Created By Nitzan Smulevici',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full scroll-smooth antialiased'>
    <body className={`flex h-full flex-col ${montserrat.className}`}>
      <Header />
      <main className='grow'>
        {children}
      </main>
      <Footer />  
    </body>
    </html>
  )
}
