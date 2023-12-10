import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MongoDB CRUD',
  description: 'MongoDB, Tailwind CSS, Next-Auth',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-full mx-auto">
          <Navbar />
          <div className="mt-8 pl-3 pr-3">{children}</div>
        </div>
      </body>
    </html>
  );
}
