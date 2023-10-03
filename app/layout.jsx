import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';




export const metadata = {
    title: "Sportify",
    description: "Organize, rule, and much more!",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="pl">
       
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>
       
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