import { Outfit } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import SessionProvider from '@/components/providers/SessionProvider';
import DynamicLayout from '@/components/layout/DynamicLayout';

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${outfit.className} dark:bg-gray-900 overflow-x-hidden`}>
        <SessionProvider>
          <ThemeProvider>
            <SidebarProvider>
              <DynamicLayout>{children}</DynamicLayout>
            </SidebarProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
