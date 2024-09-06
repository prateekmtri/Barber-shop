"use client";
import { useSession, signIn as nextAuthSignIn } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const { data: nextAuthSession } = useSession();
  const [firebaseUser] = useAuthState(auth);
  const router = useRouter();
  const [userSession, setUserSession] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserSession(sessionStorage.getItem('user'));
    }
  }, []);

  useEffect(() => {
    if (firebaseUser || nextAuthSession || userSession) {
      router.push('/all-in-one'); 
    }
  }, [firebaseUser, nextAuthSession, userSession, router]);

  const handleSignIn = (provider) => {
    nextAuthSignIn(provider);
  };

  return (
    <div className="bg-[#191c24] h-[730px] w-full flex flex-col items-center justify-center text-white">
      {!nextAuthSession && !firebaseUser && !userSession && (
        <>
          <h1 className="pr-5 font-bold text-lg">SIGN UP</h1>
          <div className="mt-4">
            <div>
              <button
                className="bg-sky-400 hover:bg-sky-800 text-white font-bold h-20 w-80 rounded flex items-center justify-center"
                onClick={() => handleSignIn('google')}
              >
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Sign up with GOOGLE
              </button>
              <button
                className="bg-gray-600 hover:bg-gray-800 text-white font-bold h-20 w-80 rounded mt-2 flex items-center justify-center"
                onClick={() => handleSignIn('github')}
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                Sign up with GITHUB
              </button>
            </div>
            <div className="pt-5">
              <button
                className="bg-green-400 hover:bg-green-800 text-white font-bold h-20 w-80 rounded"
                onClick={() => router.push('/sign-up')}
              >
                Sign up with Email and Password
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
