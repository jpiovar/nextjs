'use client'

import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
  // const { isLoaded, userId, sessionId, getToken } = useAuth();

  const { isLoaded, isSignedIn, user } = useUser();

  const [count, setCount]= useState(0);

  console.log('Counter component');

  if (!isLoaded || !isSignedIn) {
    return null;
  }


  return <><h1 onClick={() => setCount(count + 1)}>Counter component clicked {count} times</h1></>
}