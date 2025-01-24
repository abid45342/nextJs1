
import Header from "@/components/Header";
import "./globals.css";
// import { AuthProvider } from "./AuthProvider";

export default function layout({ children }) {
  return (

<html lang="en">
      <body className="font-sans">
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>

  );
}
