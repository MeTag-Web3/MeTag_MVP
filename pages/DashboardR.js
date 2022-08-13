import Image from "next/image";
import metamask from "../public/icons/metamask.svg";
import portis from "../public/icons/portis.svg";
import binance from "../public/icons/binance.svg";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import tooltip from "../public/icons/tooltip.svg";
import providerOptionsObject from "../providerOptions";
import { useState, useRef } from "react";
import twitter from "../public/icons/twitter.svg";
import instagram from "../public/icons/instagram.svg";
import linkedin from "../public/icons/linkedin.svg";
import discord from "../public/icons/discord.svg";
import telegram from "../public/icons/telegram.svg";
import logo from "../public/icons/metag_logo.svg";
import Gradient from "../components/Gradient";
import axios from "axios";
import Link from "next/link";
import * as React from "react";
import MintNFT from "./MintNFT";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsThreeDots, BsFillPlusCircleFill } from "react-icons/bs";
import { Switch } from "@chakra-ui/switch";
import CopyToClipboard from "react-copy-to-clipboard";

function DashboardR() {
     
// const handleBtn = async () => {
//   document.getElementById("btn").style.display = "none";
//   document.getElementById("btns").style.display = "flex";
//     };

    const [twi, setTwitter] = useState("");
    const [dis, setDiscord] = useState("");
    const [tel, setTelegram] = useState("");
    
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

       if (event.target.name == "metamask") {
         providerOptions = providerOptionsObject.metamask;
         injectedProvider = false;
       }
       if (event.target.name == "portis") {
         providerOptions = providerOptionsObject.portis;
         injectedProvider = true;
       }
       if (event.target.name == "binance") {
         providerOptions = providerOptionsObject.binance;
         injectedProvider = true;
       }

       const web3Modal = new Web3Modal({
         cacheProvider: false, // optional
         disableInjectedProvider: injectedProvider,
         providerOptions,
       });

       await web3Modal.clearCachedProvider();

       try {
         const provider = await web3Modal.connect();
         const library = new ethers.providers.Web3Provider(provider);
         const accounts = await library.listAccounts();
         if (event.target.name == "metamask") {
           setMetamaskAccount(accounts[0]);
         }
         if (event.target.name == "binance") {
           setBinanceAccount(accounts[0]);
         }
         if (event.target.name == "portis") {
           setPortisAccount(accounts[0]);
         }

         provider.on("accountsChanged", (accounts) => {
           if (event.target.name == "metamask") {
             setMetamaskAccount(accounts[0]);
           }
           if (event.target.name == "binance") {
             setBinanceAccount(accounts[0]);
           }
           if (event.target.name == "portis") {
             setPortisAccount(accounts[0]);
           }
         });
       } catch (error) {
         console.log("error", error);
       }
     };
  

    return (
      <>
        {/* <Gradient /> */}
        <div className="absolute bg-grad bg-no-repeat bg-right-top">
          <div className=" bg-grad2 bg-no-repeat bg-left-top">
            <div className=" bg-grad3 bg-no-repeat bg-right">
              <div className=" bg-grad4 bg-no-repeat bg-left">
                <div className="navbar flex justify-between items-center p-4 bg-[#0f172acc]  mb-6 ">
                  <div>
                    <div className="flex mr-auto py-2 ">
                      <Link href="/">
                        <a className="flex mr-auto hover:bg-[#dbd5d533] ease-in transition duration-700 px-2 py-1 border-0 rounded-xl">
                          <Link href="https://www.getmetag.io/">
                            <Image src={logo} alt="metag_logo" />
                          </Link>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center items-center  md:order-2">
                    <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
                      <div className="line h-0.5 w-6 my-1 bg-white"></div>
                      <div className="line h-0.5 w-6 my-1 bg-white"></div>
                      <div className="line h-0.5 w-6 my-1 bg-white"></div>
                    </div>
                  </div>
                </div>
                <div className="text-[#F8FAFC] text-[24px] pl-3 pb-6 font-roboto font-bold relative">
                  Dashboard
                </div>

                <div className="flex flex-col px-4 relative">
                  <div className=" bg-[#0f172a4d] rounded-md p-5 mt-6 border border-[#0f172a4d] backdrop-blur shadow-[0px_20px_25px_rgba(0, 0, 0, 0.1), 0px_10px_10px_rgba(0, 0, 0, 0.04)]">
                    <div className="flex flex-col">
                      <h4>Social Media Accounts</h4>
                      {/* <h5 className="text-[#94A3B8] font-normal">
                        Link Your Social Accounts
                      </h5> */}
                      <div className="flex flex-col justify-between mt-8 space-y-2">
                        <div className="flex">
                          <Image src={twitter} alt="wallet_logo" />
                          <h6 className="pl-3 pr-2 font-medium">Twitter</h6>
                          <Image src={tooltip} alt="info" />
                        </div>
                        <input
                          type="text"
                          value={twi}
                          placeholder="https://twitter.com/getmetag"
                          className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-2 "
                          onChange={(e) => setTwitter(e.target.value)}
                          //   value={metamaskAccount}
                          //   onChange={(e) => setMetamaskAccount(e.target.value)}
                        />
                        <Link href="https://twitter.com/getmetag">
                          <a target="_blank">
                            <button
                              id="btn"
                              // onClick={handleBtn}
                              className="font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]"
                            >
                              Connect
                            </button>
                          </a>
                        </Link>
                        <div id="btns" className=" hidden space-x-2">
                          <CopyToClipboard text={twi}>
                            <button className="border px-3 py-3 border-[#6633FF] hover:bg-[#6633FF]">
                              <MdOutlineContentCopy />
                            </button>
                          </CopyToClipboard>
                          <button className="border px-3 py-3 border-[#6633FF] hover:bg-[#6633FF]">
                            <BsThreeDots />
                          </button>
                          <button className=" px-2 py-2">
                            <div className="flex justify-center">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-purple-200 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between mt-8 space-y-2">
                        <div className="flex">
                          <Image
                            src={instagram}
                            alt="wallet_logo"
                            height="24px"
                            width="24px"
                          />
                          <h6 className="pl-3 pr-2 font-medium">Instagram</h6>
                          <Image src={tooltip} alt="info" />
                        </div>
                        <input
                          type="text"
                          value={twi}
                          placeholder="https://www.instagram.com/metag.hq/"
                          className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-2 "
                          onChange={(e) => setTwitter(e.target.value)}
                          //   value={metamaskAccount}
                          //   onChange={(e) => setMetamaskAccount(e.target.value)}
                        />
                        <Link href="https://www.instagram.com/metag.hq/">
                          <a target="_blank">
                            <button
                              id="btn"
                              // onClick={handleBtn}
                              className="font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]"
                            >
                              Connect
                            </button>
                          </a>
                        </Link>
                        <div id="btns" className=" hidden space-x-2">
                          <CopyToClipboard text={twi}>
                            <button className="border px-3 py-3 border-[#6633FF] hover:bg-[#6633FF]">
                              <MdOutlineContentCopy />
                            </button>
                          </CopyToClipboard>
                          <button className="border px-3 py-3 border-[#6633FF] hover:bg-[#6633FF]">
                            <BsThreeDots />
                          </button>
                          <button className=" px-2 py-2">
                            <div className="flex justify-center">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-purple-200 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between mt-10 space-y-2">
                        <div className="flex">
                          <Image src={discord} alt="wallet_logo" />
                          <h6 className="pl-3 pr-2 font-medium">Discord</h6>
                          <Image src={tooltip} alt="info" />
                        </div>
                        <input
                          type="text"
                          value={dis}
                          placeholder="https://discord.gg/hCNkDQcd"
                          className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-2 "
                          onChange={(e) => setDiscord(e.target.value)}
                          //   value={metamaskAccount}
                          //   onChange={(e) => setMetamaskAccount(e.target.value)}
                        />
                        <button
                          id="btn"
                          // onClick={handleBtn}
                          className="font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]"
                        >
                          Connect
                        </button>
                        <div id="btns" className=" hidden space-x-2">
                          <CopyToClipboard text={dis}>
                            <button className="border px-3 py-3 border-[#6633FF] hover:bg-[#6633FF]">
                              <MdOutlineContentCopy />
                            </button>
                          </CopyToClipboard>
                          <button className="border px-3 py-3 border-[#6633FF] hover:bg-[#6633FF]">
                            <BsThreeDots />
                          </button>
                          <button className="border px-2 py-2 border-[#6633FF] ">
                            <div className="flex justify-center">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-purple-200 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between mt-10 mb-8 space-y-2">
                        <div className="flex">
                          <Image src={linkedin} alt="wallet_logo" />
                          <h6 className="pl-3 pr-2 font-medium">LinkedIn</h6>
                          <Image src={tooltip} alt="info" />
                        </div>
                        <input
                          type="text"
                          value={tel}
                          placeholder="https://www.linkedin.com/company/metag/"
                          className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-2 "
                          onChange={(e) => setTelegram(e.target.value)}
                          //   value={metamaskAccount}
                          //   onChange={(e) => setMetamaskAccount(e.target.value)}
                        />
                        <Link href="https://www.linkedin.com/company/metag/">
                          <a target="_blank">
                            <button
                              id="btn"
                              // onClick={handleBtn}
                              className="font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]"
                            >
                              Connect
                            </button>
                          </a>
                        </Link>
                        <div id="btns" className=" hidden space-x-2 ">
                          <CopyToClipboard text={tel}>
                            <button className="border px-3 py-3 border-[#6633FF] hover:bg-[#6633FF]">
                              <MdOutlineContentCopy />
                            </button>
                          </CopyToClipboard>
                          <button className="border px-3 py-3 border-[#6633FF] hover:bg-[#6633FF]">
                            <BsThreeDots />
                          </button>
                          <button className=" px-2 py-2 ">
                            <div className="flex justify-center">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-purple-200 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <button className="font-roboto  border py-2 border-[#6633FF] bg-[#6633FF]">
                        Add New Social Account
                      </button>
                    </div>
                  </div>
                  <div className=" bg-[#0f172a4d] rounded-md p-5 mt-6 border border-[#0f172a4d] backdrop-blur shadow-[0px_20px_25px_rgba(0, 0, 0, 0.1), 0px_10px_10px_rgba(0, 0, 0, 0.04)]">
                    <div className="flex flex-col ">
                      <h4>Crypto Accounts</h4>
                      {/* <h5 className="text-[#94A3B8] font-normal">
                        Attach your wallet address
                      </h5> */}
                      <div className="flex flex-col  mt-8 justify-between space-y-2">
                        <div className="flex">
                          <Image src={metamask} alt="wallet_logo" />
                          <h6 className="pl-3 pr-2 font-medium">Metamask</h6>
                          <Image src={tooltip} alt="info" />
                        </div>
                        <input
                          type="text"
                          placeholder="Press Connect..."
                          className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10"
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
                      <div className="flex flex-col justify-between mt-10 space-y-2">
                        <div className="flex">
                          <Image src={portis} alt="wallet_logo" />
                          <h6 className="pl-3 pr-2 font-medium">
                            Portis Wallet
                          </h6>
                          <Image src={tooltip} alt="info" />
                        </div>
                        <input
                          type="text"
                          placeholder="Press Connect..."
                          className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 "
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
                      <div className="flex flex-col justify-between mt-10 mb-8 space-y-2">
                        <div className="flex">
                          <Image src={binance} alt="wallet_logo" />
                          <h6 className="pl-3 pr-2 font-medium">
                            Binance Wallet
                          </h6>
                          <Image src={tooltip} alt="info" />
                        </div>
                        <input
                          type="text"
                          placeholder="Press Connect..."
                          className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 "
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
                    <div className="flex flex-col justify-between">
                      <button className="font-roboto border py-2 border-[#6633FF] bg-[#6633FF]">
                        Add New Wallet
                      </button>
                    </div>
                  </div>

                  <div className=" bg-[#0f172a4d] rounded-md p-5 mt-6 border border-[#0f172a4d] backdrop-blur shadow-[0px_20px_25px_rgba(0, 0, 0, 0.1), 0px_10px_10px_rgba(0, 0, 0, 0.04)]">
                    <div className="flex flex-col">
                      <h4>Join Private Community</h4>
                      {/* <h5 className="text-[#94A3B8] font-normal">
                        Invite or share information about your channels or
                        webpages
                      </h5> */}
                      <div className="flex flex-col justify-between mt-8 space-y-2">
                        <input
                          type="text"
                          placeholder="https://discord.gg/8wFar7sQ"
                          className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 "
                          //   value={metamaskAccount}
                          //   onChange={(e) => setMetamaskAccount(e.target.value)}
                        />
                        <button
                          id="btn"
                          // onClick={handleBtn}
                          className="font-roboto  border px-[60px] py-2 border-[#6633FF] hover:bg-[#6633FF]"
                        >
                          Connect
                        </button>
                        <div id="btns" className=" hidden space-x-2">
                          <CopyToClipboard>
                            <button className="border px-3 py-3 border-[#6633FF] hover:bg-[#6633FF]">
                              <MdOutlineContentCopy />
                            </button>
                          </CopyToClipboard>
                          <button className="border px-3 py-3 border-[#6633FF] hover:bg-[#6633FF]">
                            <BsThreeDots />
                          </button>
                          <button className="border px-2 py-2 border-[#6633FF] ">
                            <div className="flex justify-center">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-purple-200 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-2 pt-8">
                      <button className="font-roboto  border py-2 border-[#6633FF] bg-[#6633FF]">
                        Add New Social Account
                      </button>
                      <button className="font-roboto  border py-2 border-[#6633FF] hover:bg-[#6633FF]">
                        Add Discord Invite
                      </button>
                      <button className="font-roboto  border py-2 border-[#6633FF] hover:bg-[#6633FF]">
                        Add Phone
                      </button>
                      <button className="font-roboto  border py-2 border-[#6633FF] hover:bg-[#6633FF]">
                        Add Website
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ); 
}



export default DashboardR;