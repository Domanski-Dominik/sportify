'use client'

import FormGr from '@components/FormGr';
import GoBack from '@components/GoBack';
import { useSession } from 'next-auth/react';
import Login from '@components/Login';

const CreateGr = () => {
    const {data:session,status }= useSession();
    if (status === "authenticated") {
      return (
        <div>
        <GoBack />
        <FormGr 
          type={'Utwórz'}
        />
        </div>
      )
    };
    return <Login />
}

export default CreateGr