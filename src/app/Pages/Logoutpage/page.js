"use client";
import { useSession, signOut as nextAuthSignOut } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { signOut as firebaseSignOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: nextAuthSession } = useSession();
  const [firebaseUser] = useAuthState(auth);
  const router = useRouter();

  
  useEffect(() => {
    const userSession = typeof window !== "undefined" ? sessionStorage.getItem('user') : null;

    if (!firebaseUser && !nextAuthSession && !userSession) {
      router.push('/'); 
    }
  }, [firebaseUser, nextAuthSession, router]);

  const handleSignOut = async () => {
    if (nextAuthSession) {
      await nextAuthSignOut();
    }
    if (firebaseUser) {
      await firebaseSignOut(auth);
      sessionStorage.removeItem('user');
    }
    router.push('/'); 
  };


  const userSession = typeof window !== "undefined" ? sessionStorage.getItem('user') : null;

  return (
    <div className="bg-[#191c24] h-16 w-full flex flex-col items-center justify-center text-white">
      {(firebaseUser || nextAuthSession || userSession) ? (
        <div className="pr-10 lg:pr-[870px]">
          <div className="pr-20 lg:pr-80">
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold h-10 w-40 rounded"
              onClick={handleSignOut}
            >
              {nextAuthSession ? 'Sign out' : 'Log out'}
            </button>
          </div>
        </div>
      ) : (
        <>
          
        </>
      )}
    </div>
  );
}
