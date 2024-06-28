"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "./button";

export const LoginButton = () => {
  return (
    <Button variant='default' onClick={()=> signIn()}>
      Login
    </Button>
  );
};
export const LogoutButton = () => {
  return (
    <Button variant='destructive' onClick={()=> signOut()}>
      Logout
    </Button>
  );
};
