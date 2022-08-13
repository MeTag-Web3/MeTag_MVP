import Image from "next/image";
import metamask from "../public/icons/metamask.svg";
import portis from "../public/icons/portis.svg";
import binance from "../public/icons/binance.svg";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import tooltip from "../public/icons/tooltip.svg"
import providerOptionsObject from '../providerOptions';
import { useState, useRef} from "react";
import twitter from "../public/icons/twitter.svg";
import discord from "../public/icons/discord.svg";
import telegram from "../public/icons/telegram.svg";
import logo from "../public/icons/metag_logo.svg";
import Gradient from "../components/Gradient";
import axios from "axios";
import Link from "next/link";
import * as React from "react";
import MintNFT from "./MintNFT";
// import Backdrop from "@mui/material/Backdrop";
// import CircularProgress from "@mui/material/CircularProgress";
// import Button from "@mui/material/Button";



function Dashboard() {

 const [open, setOpen] = useState(false);
 const handleClose = () => {
   setOpen(false);
 };
 const handleToggle = () => {
   setOpen(!open);
 };

  // const [image, setImage] = useState("");

  const [metamaskAccount, setMetamaskAccount] = useState("");
  const [binanceAccount, setBinanceAccount] = useState("");
  const [portisAccount, setPortisAccount] = useState("");
  
  const connectWallet = async (event) => {
    
    let injectedProvider;
    let providerOptions;

    if (event.target.name == 'metamask') {
      providerOptions = providerOptionsObject.metamask;
      injectedProvider = false;
    }
    if (event.target.name == 'portis') {
      providerOptions = providerOptionsObject.portis;
      injectedProvider = true;
    }
    if (event.target.name == 'binance') {
     providerOptions = providerOptionsObject.binance;
     injectedProvider = true;
    }

    const web3Modal = new Web3Modal({
      cacheProvider: false, // optional
      disableInjectedProvider: injectedProvider,
      providerOptions
    });

    await web3Modal.clearCachedProvider();

    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      if (event.target.name == 'metamask') {
        setMetamaskAccount(accounts[0]);
      }
      if (event.target.name == 'binance') {
        setBinanceAccount(accounts[0]);
      }
      if (event.target.name == 'portis') {
        setPortisAccount(accounts[0]);
      }

      provider.on("accountsChanged", (accounts) => {
        if (event.target.name == 'metamask') {
          setMetamaskAccount(accounts[0]);
         }
         if (event.target.name == 'binance') {
          setBinanceAccount(accounts[0]);
         }
         if (event.target.name == 'portis') {
          setPortisAccount(accounts[0]);
         }
      });
    }
      catch (error) {
        console.log('error', error);
    }
  }
  
  

  return (
    <>
      <Gradient />
      <div className="text-[#F8FAFC] text-[24px] px-24 pb-6 pt-10 font-roboto font-bold relative">
        Admin Dashboard
      </div>
      <div className="flex flex-col px-24 relative">
        <div className=" bg-[#0f172a4d] rounded-3xl p-7">
          <div className="flex flex-col ">
            <h4>Crypto Accounts</h4>
            <h5 className="text-[#94A3B8] font-normal">
              Attach your wallet address
            </h5>
            <div className="flex  items-center mt-8 justify-between">
              <div className="flex">
                <Image src={metamask} alt="wallet_logo" />
                <h6 className="pl-3 pr-2 font-medium">Metamask</h6>
                <Image src={tooltip} alt="info" />
              </div>
              <input
                type="text"
                placeholder="Press Connect..."
                className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[600px]"
                value={metamaskAccount}
              />
              <button
                className=" font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]"
                onClick={connectWallet}
                name="metamask"
              >
                Connect
              </button>
            </div>
            <div className="flex  items-center justify-between mt-10">
              <div className="flex">
                <Image src={portis} alt="wallet_logo" />
                <h6 className="pl-3 pr-2 font-medium">Portis Wallet</h6>
                <Image src={tooltip} alt="info" />
              </div>
              <input
                type="text"
                placeholder="Press Connect..."
                className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[600px]"
                value={portisAccount}
              />
              <button
                className="font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]"
                onClick={connectWallet}
                name="portis"
              >
                Connect
              </button>
            </div>
            <div className="flex  items-center justify-between mt-10 mb-10">
              <div className="flex">
                <Image src={binance} alt="wallet_logo" />
                <h6 className="pl-3 pr-2 font-medium">Binance Wallet</h6>
                <Image src={tooltip} alt="info" />
              </div>
              <input
                type="text"
                placeholder="Press Connect..."
                className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[600px]"
                value={binanceAccount}
              />
              <button
                className="font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]"
                onClick={connectWallet}
                name="binance"
              >
                Connect
              </button>
            </div>
          </div>
          <button className="font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]">
            Add New Wallet
          </button>
        </div>
        <div className=" bg-[#0f172a4d] rounded-3xl p-7 mt-6">
          <div className="flex flex-col">
            <h4>Social Media Accounts</h4>
            <h5 className="text-[#94A3B8] font-normal">
              Link Your Social Accounts
            </h5>
            <div className="flex  items-center justify-between mt-8">
              <div className="flex">
                <Image src={twitter} alt="wallet_logo" />
                <h6 className="pl-3 pr-2 font-medium">Twitter</h6>
                <Image src={tooltip} alt="info" />
              </div>
              <input
                type="text"
                placeholder="@getmetag"
                className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[600px]"
                //   value={metamaskAccount}
                //   onChange={(e) => setMetamaskAccount(e.target.value)}
              />
              <button className="font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]">
                Connect
              </button>
            </div>
            <div className="flex  items-center justify-between mt-10">
              <div className="flex">
                <Image src={discord} alt="wallet_logo" />
                <h6 className="pl-3 pr-2 font-medium">Discord</h6>
                <Image src={tooltip} alt="info" />
              </div>
              <input
                type="text"
                placeholder="https://discord.gg/hCNkDQcd"
                className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[600px]"
                //   value={metamaskAccount}
                //   onChange={(e) => setMetamaskAccount(e.target.value)}
              />
              <button className="font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]">
                Connect
              </button>
            </div>
            <div className="flex  items-center justify-between mt-10 mb-10">
              <div className="flex">
                <Image src={telegram} alt="wallet_logo" />
                <h6 className="pl-3 pr-2 font-medium">Telegram</h6>
                <Image src={tooltip} alt="info" />
              </div>
              <input
                type="text"
                placeholder="@getmetag"
                className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[600px]"
                //   value={metamaskAccount}
                //   onChange={(e) => setMetamaskAccount(e.target.value)}
              />
              <button className="font-roboto border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]">
                Connect
              </button>
            </div>
          </div>

          <button className="font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]">
            Add New Social Account
          </button>
        </div>
       {/* <MintNFT/> */}
      </div>
    </>
  );
}

export default Dashboard;
