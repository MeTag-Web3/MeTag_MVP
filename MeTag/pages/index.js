import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Dashboard from './Dashboard'
import Head from 'next/head'


export default function Home() {
  return (
    <>    
    <Navbar />
    <Dashboard/>
    </>
  )
}
