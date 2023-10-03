'use client'

import LocationForm from '@components/FormLoc';
import GoBack from '@components/GoBack';
import { useSession } from 'next-auth/react';
import Login from '@components/Login';

const CreateLoc = () => {
  const {data:session,status }= useSession();
  if (status === "authenticated") {
    return (
      <div>
      <GoBack />
      <LocationForm 
        type={'Utwórz'}
      />
      </div>
    )
  };
  return <Login />
}

export default CreateLoc