import ExitModal from '@/components/modals/ExitModal';
import HeartsModal from '@/components/modals/HeartsModal';
import PracticeModal from '@/components/modals/PracticeModal';
import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingo",
  description: "a best way to learn different languages on go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          <HeartsModal />
          <PracticeModal />
          <ExitModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
