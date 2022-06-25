import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../public/icons/metag_logo.svg"
import Image from "next/image";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import providerOptionsObject from '../providerOptions';


function Navbar() {

  const connectWallet = async () => {
    let providerOptions = providerOptionsObject.providerOptions;
    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: false, // optional
      providerOptions // required
    });
    
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
}


  return (
    <header className="flex flex-wrap justify-center items-center sticky top-0 bg-transparent backdrop-blur-lg z-[99] transition duration-200 py-0.5 px-16">
      <div className="flex mr-auto py-2 pl-6">
        <Link href="/">
          <a className="flex mr-auto hover:bg-[#dbd5d533] ease-in transition duration-700 px-2 py-1 border-0 rounded-xl">
            {/* <div className="font-inter font-semibold text-[26px] text-white">
              MeTag
            </div> */}
            <Image src={logo} alt="metag_logo" />
          </a>
        </Link>
      </div>

      <div className="absolute space-x-8">
        {/* <div className=" left-auto flex items-center"> */}
        <Link href="/products">
          <a className="nav-link font-roboto ">Products</a>
        </Link>
        <Link href="/roadmap">
          <a className="nav-link font-roboto ">Roadmap</a>
        </Link>
        <Link href="/about">
          <a className="nav-link font-roboto ">About</a>
        </Link>
        <Link href="/blog">
          <a className="nav-link font-roboto ">Blog</a>
        </Link>
        <Link href="/help">
          <a className="nav-link font-roboto ">Help</a>
        </Link>
      </div>
      <div className="items-end flex flex-row space-x-5">
        <Link href="/dashboard">
          <a className="nav-link font-roboto ">Dashboard</a>
        </Link>
        <button
          onClick={connectWallet}
          className="tetiary-1 font-roboto  text-white"
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

export default Navbar;
