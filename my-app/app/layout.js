import { Inter } from "next/font/google";
import "./globals.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const inter = Inter({ subsets: ["latin"] });
import Provider from "./Provider";
import SearchBar from "@/components/SearchBar";
import About from "@/components/About";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          {" "}
          <SearchBar />
          <SkeletonTheme baseColor="#c0c0c4" highlightColor="#62629e">
            {" "}
            {children}{" "}
          </SkeletonTheme>
          <About />
        </Provider>
      </body>
    </html>
  );
}
