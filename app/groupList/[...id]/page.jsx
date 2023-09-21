'use client'

import GoBack from '@components/GoBack';
import ParticipantList from '@components/ParticipantList';
import { getDisplayName } from 'next/dist/shared/lib/utils';
import { useRouter } from 'next/navigation';
import {useEffect,useState, forwardRef} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pl from 'date-fns/locale/pl';
import { getDay } from 'date-fns';
import format from 'date-fns/format'



const GroupList = ({params}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [list, setList] = useState(null)

  useEffect(() => {
    const fetchGroups = async () => {
      let decodedParams = params.id.map((item, index) => {
        if (index === 1) {
            item = decodeURIComponent(item);
            item = item.replace('%', ':');
        }
        return item;
      });
      let result = decodedParams.join('/');

      const response = await fetch(`/api/grLst/${result}`);
      const data = await response.json();

      console.log(data)
      setList(data);
    };

    if (params?.id) fetchGroups();
  }, [params.id]);

  const isSelectedDay = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;

  
  };
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="border-2 border-black rounded-full text-center px-2 bg-transparent text-xl" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const handleCheckboxChange = async (id,selectedDate) => {
    const formatedDate =  format(selectedDate,'dd/MM/yyyy')
    console.log(formatedDate)
    console.log(id)
    try {
      const response = await fetch('/api/presence', {
        method: 'PATCH',
        body: JSON.stringify({
            id: id,
            date: formatedDate,
        }),
      
      });
      if (response.ok) {
        // Pomyślnie dodano obecność
        // Tutaj możesz wykonać odpowiednie akcje, np. wyświetlić komunikat o sukcesie
        console.log('Obecność została pomyślnie dodana.');
      } else {
        // Obsłuż błąd z serwera
        console.error('Wystąpił błąd podczas dodawania obecności.');
      }
    } catch (error) {
      console.error('Wystąpił błąd podczas wysyłania żądania.', error);
    }
  };



  return (
    <>
    <GoBack />
    <div className='absolute top-[80px] right-5'><DatePicker 
     selected={selectedDate} 
     onChange={(date) => setSelectedDate(date)}
     closeOnScroll={true}
     filterDate={isSelectedDay}
     todayButton="Dziś"
     locale={pl}
     calendarStartDay={1}
     dateFormat="P"
     customInput={<ExampleCustomInput />}
    />
    </div>
    <section className='absolute top-[125px]'>

    <div>
      {list !==null &&(
    <ParticipantList 
      participants={list}
      handleCheckboxChange={handleCheckboxChange}
      selectedDate={selectedDate}
    />
    )}
    </div>
    
    </section>
    </>
  )
}

export default GroupList