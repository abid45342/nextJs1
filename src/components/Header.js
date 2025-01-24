

import {  getKindeServerSession  } from "@kinde-oss/kinde-auth-nextjs/server";
import {LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

export default async function Header() {
   const { isAuthenticated } =  getKindeServerSession();
   const isUser =await isAuthenticated();
   // Use the client-side hook

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <nav>
        <Link href='/'>Home</Link>
        

       
<Link href='/profile'> </Link>
        <a href="/profile" className="hover:underline">
          Profile
        </a>
      </nav>
      <div>
        {isUser ? (
          <LogoutLink className="hover:underline">Logout</LogoutLink>
        ) : (
          <LoginLink className="hover:underline">Login</LoginLink>
        )}
      </div>
    </header>
  );
}
