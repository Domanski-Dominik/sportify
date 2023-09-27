'use client';

import { useEffect, useState } from "react";
import { useSearchParams, useRouter} from "next/navigation";
import DaysCard from "@components/DaysCard";
import GoBack from "@components/GoBack";

const DaysCardList = ({ data, handleClick}) => {
    return (
        <div className='days_layout'>
            {data.map((gr) => (
              <DaysCard 
                key={gr.day}
                gr={gr}
                handleClick={handleClick}
              />
            ))}
        </div>
    );
}

const Groups = ({ params }) => {
    const [days, setDays] = useState([]);
    const [loc, setLoc] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchGroups = async () => {
          const response = await fetch(`/api/loc/days/${params?.id}`);
          const data = await response.json();
          const days = data.daysOfWeek.slice();
          setDays(days);
          console.log(days);
        };
    
        if (params?.id) fetchGroups();
      }, [params.id]);

    const handleClick =(clickedId) => {
        console.log('Kliknięte ID grupy:', clickedId);

        router.push(`/locations/group/${clickedId}`)
      };
    return (
        <section >
        <GoBack />
        <DaysCardList
        data={days} 
        handleClick={handleClick} 
        />
    </section>
  )
}

export default Groups