import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    // A simple header container for layout
    <header className="p-4 flex justify-between items-center border-b">
      <p className="text-xl font-bold">MyApp</p>

      <div>
        <SignedOut>
          {/* A flex container to space out the buttons */}
          <div className="flex items-center gap-4">
            <SignInButton mode="modal">
              {/* Added styling to make the sign-in button look clickable */}
              <button className="font-semibold text-gray-600 hover:text-black transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              {/* Kept your original styles with an added hover effect */}
              <button className="bg-[#6c47ff] text-white rounded-lg font-semibold text-sm h-10 px-5 cursor-pointer hover:bg-[#583ac9] transition-all">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          {/* The UserButton will now appear in the same spot as the other buttons */}
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}