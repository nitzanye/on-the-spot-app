import './globals.css';
import { montserrat } from './utils/constance';
import Header from './header';
import Footer from './footer';
import Nav from './auth/Nav';
import QueryWarapper from './auth/QueryWrapper';

export const metadata = {
  title: 'On The Spot App',
  description: 'Created By Nitzan Smulevici',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full scroll-smooth antialiased'>
      <body className={`flex h-full flex-col ${montserrat.className}`}>
        <QueryWarapper>
          <Nav />
          {/* <Header /> */}
          <main className='grow'>{children}</main>
          <Footer />
        </QueryWarapper>
      </body>
    </html>
  );
}
