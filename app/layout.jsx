import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { SessionProvider } from 'next-auth/react';



export const metadata = {
    title: "Sportify",
    description: "Organize, rule, and much more!"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="pl">
        <body className=''>
        <Provider>
            <Nav />
            <main className='app'>
           
                {children} 
            </main>
        
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;