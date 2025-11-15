import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { LeftSidebar } from '@/components/sidebar/left-sidebar';
import { RightSidebar } from '@/components/sidebar/right-sidebar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ByeWind Dashboard',
  description: 'Juspay Assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <LeftSidebar />
            <SidebarInset>
              <Header />
              <main className="flex-1">{children}</main>
            </SidebarInset>
            <RightSidebar />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
