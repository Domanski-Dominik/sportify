'use client'

import React from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Login from '@components/Login';

const Payments = () => {
  const router = useRouter();
  const {data:session,status }= useSession();
  if(status === "authenticated") {
    return (
      <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
    )
  };
  return <Login/>
}

export default Payments