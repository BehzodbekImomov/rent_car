// "use client"
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CarContext from "@/context/CarContext";
import Loading from "./(public)/loading";
import IdContext from "@/context/IdContext";
// import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portofino",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
            <IdContext>
              <CarContext>
          {/* <ToastContainer/> */}
               
                {children}
        
              </CarContext>
            </IdContext>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
