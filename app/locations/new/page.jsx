'use client'

import LocationForm from '@components/FormLoc';
import GoBack from '@components/GoBack';

const CreateLoc = () => {
  return (
    <div>
    <GoBack />
    <LocationForm 
      type={'Utwórz'}
    />
    </div>
  )
}

export default CreateLoc

/* 
<LocationForm 
    loc={loc}
    type={'Utwórz'}
    submitting={submitting}
    handleSubmit={createLoc}
    setLoc={setLoc}/>
    */