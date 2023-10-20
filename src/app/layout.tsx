import "./globals.css";
import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import { Footer, Navbar } from "./components";
// import {  ToastContainer } from "";
// import { ToastContainer } from "./components/Toast";
Toast;
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/context/AuthProvider";
import Toast from "./components/Toast";

const inter = Inter({ subsets: ["latin"] });
// const Source_Sans_3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dress Up Exchange",
  description: "Cosplay for life",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
  manifest: "/site.webmainfest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <AuthProvider>
            <Navbar />
            {/* <ToastContainer position="top-right" autoClose={1500} /> */}
            <Toast />
            <main className="flex-1">{children}</main>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
