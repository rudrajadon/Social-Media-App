import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <header className="p-4 flex justify-between items-center border-b">
      <p className="text-xl font-bold">MyApp</p>

      {/* Main container for all items on the right */}
      <div className="flex items-center gap-4">
        <SignedOut>
          {/* This inner container is no longer needed but is fine */}
          <div className="flex items-center gap-4">
            <SignInButton mode="modal">
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Sign Up</Button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          {/* UserButton is now part of the main flex container */}
          <UserButton />
        </SignedIn>

        {/* ModeToggle is also part of the main flex container */}
        <ModeToggle />
      </div>
    </header>
  );
}