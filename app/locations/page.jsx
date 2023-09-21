'use client'

import {useState, useEffect} from 'react';
import LocCard from '@components/LocCard' ;
import { usePathname, useRouter,Link } from "next/navigation";

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


  const fetchLoc = async () => {
    const response = await fetch('/api/loc');
    const data = await response.json();

    setAllLocs(data);
  };

  useEffect(() => {
    fetchLoc();
  }, []);
  

  const handleClick = (clickedId) => {
    console.log('Kliknięte ID:', clickedId);

    router.push(`/locations/${clickedId}`)

  };
  return (
    <section >
        <LocCardList
        data={allLocs} 
        handleClick={handleClick} 
        />
      
    </section>
  
  )
}

export default Locations