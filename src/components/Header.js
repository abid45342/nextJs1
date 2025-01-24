'use client';

import { LoginLink, LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Header() {
  const { isAuthenticated } = useKindeBrowserClient(); // Use the client-side hook

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <nav>
        <a href="/" className="mr-4 hover:underline">
          Home
        </a>
        <a href="/profile" className="hover:underline">
          Profile
        </a>
      </nav>
      <div>
        {isAuthenticated ? (
          <LogoutLink className="hover:underline">Logout</LogoutLink>
        ) : (
          <LoginLink className="hover:underline">Login</LoginLink>
        )}
      </div>
    </header>
  );
}
