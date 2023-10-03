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
       <head>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
          <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
       </head>
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