import Head from 'next/head'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 헤더 */}
      <Header />

      {/* 메뉴 */}
      <Main />
      {/* 컨텐츠 */}

      <Footer/>
      
    </div>
  )
}