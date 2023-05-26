import Head from 'next/head'
import Navbar from './navbar';
import Footer from './footer';
import { LayoutProps } from '@types'

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className="bg-[#fefefe] w-full">
      <Head>
          <title>{`${title} - Help`}</title>
          <meta name="desciption" content="Get your everyday work done" />
      </Head>

      <div className='w-full xl:max-w-6xl m-auto px-3 sm:px-8 xl:px-0 space-y-10 pb-10'>
          <Navbar/>
          <div className='space-y-[50px]'> { children } </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout