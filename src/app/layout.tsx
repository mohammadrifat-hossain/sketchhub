import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "../../providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner"
import { ModalProvider } from "../../providers/modalProvider";
import { Suspense } from "react";
import Loading from "@/components/auth/Loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SketchHub",
  description: "A Miro clone using Next js, convex, liveblocks, shadcd, clark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
