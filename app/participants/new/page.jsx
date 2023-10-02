'use client'

import FormPrt from "@components/FormPrt"
import GoBack from "@components/GoBack";
import { useRouter } from "next/navigation";
import { useState } from 'react'

const CreateParticipant = () => {
  const router= useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [participant, setParticipant] = useState({
    name: '',
    surname: '',
    tel: '',
    gr: [{
      name: '',
      day: '',
    }],
    email:'',
    presence: [],
    payments: [],
    note: null,
  });

  const createParticipant = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/participant/new',
      {
        method: 'POST',
        body: JSON.stringify({
            name: participant.name,
            surname: participant.surname,
            tel: participant.tel,
            gr: participant.gr,
            email: participant.email,
            presence: [],
            payments: [],
            note: null,
        })
      })
      if(response.ok) {
        window.history.back();
      }
      
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
        <GoBack />
        <FormPrt 
            type="Utwórz"
            participant={participant}
            setParticipant={setParticipant}
            submitting={submitting}
            handleSubmit={createParticipant}
        />
    </div>
  )
}

export default CreateParticipant