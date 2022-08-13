import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Dashboard from './Dashboard'
import Head from 'next/head'
import Portfolio from './Portfolio'
import Footer from '../components/Footer'
import DashboardR from './DashboardR'
// import ConnectButton from './ConnectButton'
// import FollowButton from './FollowButton'


export default function Home() {
  return (
    <>    
    {/* <Navbar /> */}
      {/* <Dashboard /> */}
      <DashboardR/>
      {/* <ConnectButton />
      <FollowButton/> */}
      {/* <Portfolio /> */}
      {/* <Footer /> */}
      
    </>
  )
}
