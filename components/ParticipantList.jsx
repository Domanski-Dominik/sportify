'use client'

import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ParticipantList = ({ participants, handleCheckboxChange,selectedDate }) => {

const handleClick = (id) => {
    handleCheckboxChange(id,selectedDate) //Przekazuje ID klikniętej karty do funkcji handleClick
  };
    return (
        <>
          <table className="w-screen max-w-5xl text-left text-sm table-auto font-normal ">
            <thead
              className=" border-b bg-transparent font-medium ">
              <tr>
              <th scope="col" className="text-center px-2">#</th>
                <th scope="col" className="py-2">Nazwisko</th>
                <th scope="col" className="py-2">Imię</th>
                <th scope="col" className="py-2 text-center">Obecny</th>
                <th scope="col" className="py-2 "></th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant,index) => (
              <tr key={participant.surname} 
                className="border-b bg-transparent ">
                  <td 
                   className="text-center font-medium py-2"
                  >
                    {index + 1}
                  </td>
                  <td 
                   className="py-2"
                  >
                    {participant.surname}
                  </td>
                  <td 
                   className="py-2"
                  >
                    {participant.name}
                  </td>
                  <td 
                   className="py-2 text-center "
                  >
                    <input 
                     type="checkbox" 
                     id={participant._id} 
                     className="checkbox" 
                     onChange={() => handleClick(participant._id)}
                    />
                  </td>
                  <td 
                   className="py-2 text-center pr-5"
                  >
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                   {/* Rozwijane płatności, informacje i dodaj notatkę 
                   jęsli ktoś zalega z płatnościa po 10 podświetl nazwisko na czerwono
                   */ }
                  </td> 
              </tr>
              ))}
            </tbody>
          </table>
      </>
    );
};

export default ParticipantList;