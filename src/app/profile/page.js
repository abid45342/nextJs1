'use client';
import { redirect, useRouter } from 'next/navigation';  
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Profile() {
  const router = useRouter();  
  const { isAuthenticated } = useKindeBrowserClient();

  if (!isAuthenticated) {

    redirect("/api/auth/login");


  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to your profile, </h1>
      <p className="mt-4">This is your protected profile page.</p>
    </div>
  );
  
}








// {user?.first_name}!


