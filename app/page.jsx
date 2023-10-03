import Login from "@components/Login"
import { useSession } from 'next-auth/react';

const Home = () => {
  return (
       <div className='head_text text-center'> <span className='blue_gradient'>Witaj w systemie!</span></div>
  )
}

export default Home