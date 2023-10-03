'use client'

import GrCard from '@components/GrCard';
import {useEffect,useState} from 'react'
import {useRouter} from 'next/navigation'
import { useSession } from 'next-auth/react';
import GoBack from '@components/GoBack';
import Login from '@components/Login';

const GrCardList = ({ data, handleClick}) => {
  return (
      <div className='group_layout'>
          {data.map((gr) => (
            <GrCard
              key={gr}
              gr={gr}
              handleClick={handleClick}
            />
          ))}
      </div>
  );
}

const Group = ({ params }) => {
  const router = useRouter();
  const [groups, setGroups] = useState([])
  const {data:session,status }= useSession();
  
  useEffect(() => {
    const fetchGroups = async () => {
      const response = await fetch(`/api/loc/gr/${params?.id}`);
      const data = await response.json();

      console.log(data)
      setGroups(data);
    };

    if (params?.id) fetchGroups();
  }, [params.id]);

  const handleClick =(clickedId) => {
    console.log('Kliknięta nazwa grupy:', clickedId, params.id);

    router.push(`/groupList/${params.id}/${clickedId}`)
  };
  if (status === "authenticated") {
    return (
      <section >
          <GoBack />
          <GrCardList
          data={groups} 
          handleClick={handleClick} 
          />
  
      </section>
    )
  };
  return <Login />
     
  
}

export default Group