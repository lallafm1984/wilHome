import Head from 'next/head'
import Header from '@/app/components/Header'
import Main from '@/app/components/Main'
import Footer from '@/app/components/Footer'

export default function Company() {
  return (
    <div className='bg-rose-50/80 min-h-screen'>
      <Head>
        <title>W.I.L - Company</title>
        <meta name="description" content="W.I.L Company Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />
    </div>
  )
}