import QuizComponent from "@/components/quiz";
import { LoginButton, LogoutButton } from "@/components/ui/authbutton";
import { auth } from "@/src/lib/auth";
import React from "react";

export default async function HomePage() {
  const session = await auth();
  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <h2>
        {session ? "Authenticated" + session?.user.email : "Not authenticated"}
      </h2>
      <div>{session?.user ? <LogoutButton /> : <LoginButton />}</div>
      <QuizComponent />
    </div>
  );
}
