'use client'

import {useState, useEffect} from 'react';
import LocCard from '@components/LocCard' ;
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import Login from '@components/Login';

const LocCardList = ({ data, handleClick}) => {
    return (
        <div className='loc_layout'>
            {data.map((loc) => (
              <LocCard 
                key={loc._id}
                loc={loc}
                handleClick={handleClick}
              />
            ))}
        </div>
    );
}

const Locations = () => {
  const [allLocs, setAllLocs] = useState([])
  const router = useRouter();
  const {data:session,status }= useSession();
 


  const fetchLoc = async () => {
    const response = await fetch('/api/loc');
    const data = await response.json();

    setAllLocs(data);
  };

  useEffect(() => {
    fetchLoc();
  }, [session]);
  

  const handleClick = (clickedId) => {
    console.log('Kliknięte ID:', clickedId);

    router.push(`/locations/${clickedId}`)

  };
  if (status === "authenticated") {
    return (
      <section >
          <LocCardList
          data={allLocs} 
          handleClick={handleClick} 
          />
        
      </section>
    
    )
  };
  return <Login />;
}

export default Locations