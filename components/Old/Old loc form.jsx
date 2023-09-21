import Link from "next/link";

function LocationForm({ type, loc, setLoc, submitting, handleSubmit }) {


  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedGroups = [...loc.gr];
    updatedGroups[index] = value;
    setLoc({ ...loc, gr: updatedGroups });
  };

  const addGroupInput = () => {
    setLoc({ ...loc, gr: [...loc.gr, ''] });
  };

  const removeGroupInput = (index) => {
    const updatedGroups = [...loc.gr];
    updatedGroups.splice(index, 1);
    setLoc({ ...loc, gr: updatedGroups });
  };


  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Lokalizacje</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} lokalizację w której odbywają sie zajęcia!
      </p>
    <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
      <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Nazwa lokalizacji
          </span>
      <input
        type="text"
        name="place"
        placeholder="Miejsce"
        value={loc.place}
        onChange={(e) => setLoc({ ...loc, place: e.target.value })}
        required
        className='form_input'
      />
      </label>
      {loc.gr.map((group, index) => (
        <div key={index}>
          <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            {type} grupę
          </span>
          <input
            type="text"
            name="groupName"
            placeholder="Nazwa grupy"
            value={group}
            onChange={(e) => handleChange(e, index)}
            required
            className='form_input'
          />
          <button type="button" onClick={() => removeGroupInput(index)}>
            Usuń
          </button>
          </label>
        </div>
      ))}
      <button type="button" onClick={addGroupInput}>
        Dodaj grupę
      </button>
      <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/locations' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}` : type}
          </button>
        </div>
    </form>
    </section>
  );
}

export default LocationForm;
