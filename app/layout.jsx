import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./(components)/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket App",
  description: `Developed by drjvtlkr`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Navigation />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
