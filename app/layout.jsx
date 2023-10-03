import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';



export const metadata = {
    title: "Sportify",
    description: "Organize, rule, and much more!",
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
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