import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import ClientProviders from '../components/ClientProviders';
import FirebaseAuthProvider from '@/components/FirebaseAuthProvider';
import SubscriptionProvider from '@/components/SubscriptionProvider';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'E U F O R A',
  description: 'Breaking down language barriers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProviders>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <FirebaseAuthProvider>
            <SubscriptionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >          
                <Header />
                
                {children}

                <Toaster />
              </ThemeProvider>
            </SubscriptionProvider>              
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProviders>
  );
}
