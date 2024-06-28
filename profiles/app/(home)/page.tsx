import { LoginButton, LogoutButton } from "@/components/ui/authbutton";
import { Button } from "@/components/ui/button";
import { auth } from "@/src/lib/auth";
import Link from "next/link";
import React from "react";

export default async function HomePage() {
  const session = await auth();
  if (!session){
    return <div>Not authenticated</div>
  } else if (!session.user){
    return <div>Not authenticated</div>
  }
  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <h2>
        {session ? "Authenticated" + session?.user.email : "Not authenticated"}
      </h2>
      <div>{session?.user ? <LogoutButton /> : <LoginButton />}</div>
      <div>
        <Link href="/quiz">
          <Button>Start Quiz</Button>
        </Link>
      </div>
    </div>
  );
}
