

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';  
// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';

export default async function Profile() {
 
  const { isAuthenticated } =  getKindeServerSession();
  const isUser =await isAuthenticated();

  if (!isUser) {

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


