import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "THY Travel Social",
  description: "Türk Hava Yolları yolcuları için sosyal platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-100">
          <nav className="bg-red-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">THY Travel Social</h1>
              <div className="flex gap-4">
                <a href="/login" className="hover:text-gray-200">Giriş Yap</a>
                <a href="/register" className="hover:text-gray-200">Kayıt Ol</a>
              </div>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
} 