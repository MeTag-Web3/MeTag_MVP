import React, { useState } from 'react'
import axios from "axios";



const API_KEY = "ckey_cfe778e4677b4483b5b6211ec61";




 function Portfolio() {

     const [tokenImg0, settokenImg0] = useState("");
     const [tokenImg1, settokenImg1] = useState("");
     const API_URL = 'https://unstoppabledomains.g.alchemy.com/domains/';
     const API_KEY1 = 'OPnt5xBjF7t5cIhhqwpZ42iXOoqCut_-';
   
     const [stats, setStats] = useState(null);
     const [stats1, setStats1] = useState(null);
   
   
     function processLookup(e) {
       e.preventDefault();
   
       let domain = document.getElementById('domain').value;
       if (!domain) return;
   
       axios.get(API_URL + domain, {
         headers: {
           'Authorization': `bearer ${API_KEY1}`
         }
       })
         .then(res => {
           setStats(res.data);
           console.log(res.data);
       })
         .catch(err => {
           setStats();
       });
     }
   
     
    

    const getPortfolio = async () => {
    
        const response = await fetch(
            `https://api.covalenthq.com/v1/1/address/0x797eF74d45DaAEbD7ad0567E4b1BB5a03F51b31d/balances_v2/?key=${API_KEY}`
        );
        const data = await response.json();
        // console.log(data.data.quote_currency);
        const parsed = JSON.parse(JSON.stringify(data));;
        console.log(parsed)
        
        
     const ticker0 = (data.data.items[0].contract_ticker_symbol);
            const value0 = (data.data.items[0].balance / Math.pow(10, 18)).toFixed(4);
            document.getElementById("value0").textContent = value0;
        document.getElementById("currency0").textContent = ticker0;
        
             const ticker1 = data.data.items[1].contract_ticker_symbol;
             const value1 = (
               data.data.items[1].balance / Math.pow(10, 18)
             ).toFixed(4);
             document.getElementById("value1").textContent = value1;
        document.getElementById("currency1").textContent = ticker1;
        
        settokenImg0(data.data.items[0].logo_url);
        settokenImg1(data.data.items[1].logo_url);
        // setCurr(data.quote_currency)
        
}
    
   
    return (
      <>
        <div className="flex flex-col px-24 relative">
          <div className=" bg-[#0f172a4d] rounded-3xl p-7 mt-6 ">
          <div className="flex flex-col">
            <h4>MeTag Connect</h4>
            <h5 className="text-[#94A3B8] font-normal">
              Connecting People Hassle-Free
            </h5></div>
          
          <input
  
                id="domain" type="text" placeholder="Enter a domain name" aria-label="Enter a domain name" aria-describedby="button-addon" autoComplete="off"
                className=" mt-5 border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[600px]"
              
              />
                <div className='flex mt-5'>
            <button
              className="font-roboto mr-5 border-2 px-[60px] py-2 border-[#22C55E] hover:bg-[#22C55E] mb-10" 
              onClick={getPortfolio}
            >
              Portfolio
            </button>
            <button
              className="font-roboto  border-2 px-[60px] py-2 border-[#22C55E] hover:bg-[#22C55E] mb-10"
              onClick={processLookup}
            >
              Search
            </button>
            </div>

             <div id="portfolio" className="flex space-x-3 mb-5">
              <div className="flex flex-col">
                <div className="border-gradient-1 font-roboto p-3 justify-center items-center">
                  <img src={tokenImg0} alt="add" width="100" height="200"></img>
                  <h6 className="text-white">
                    <span id="value0"></span>&nbsp;
                    <span id="currency0"></span>
                  </h6>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="border-gradient-1 font-roboto p-3">
                  <img src={tokenImg1} alt="add" width="100" height="200"></img>
                  <h6 className="text-white">
                    <span id="value1"></span>&nbsp;
                    <span id="currency1"></span>
                  </h6>
                </div>
              </div>
            </div>
           
      
      <div className="">
      {stats ?
      <div>
        <h6>Domain Name - {stats.meta.domain}</h6>
        <h6>Owned by - {stats.meta.owner}</h6>
        <h6>Blockchain - {stats.meta.blockchain}</h6>

        {/* {stats.records["whois.for_sale.value"] ?
          <h6 className="onsale">On Sale</h6>
          : <h6 className="nosale">Not on Sale</h6>
        } */}
        {/* <div>
          <h6>Mail: {stats.records["whois.email.value"]}</h6>
          <div>
                <h6>No Mail found</h6>
              </div>
        </div> */}
        <div>
          {stats.records["ipfs.redirect_domain.value"] ?
            <h6>Website - {stats.records["ipfs.redirect_domain.value"]}</h6>
            :
              <div>
                <h6>No Website found</h6>
              </div>
          }
          </div>
            <div>
          <h6>Blockchain addresses in the domain</h6>
          <div>
          {stats.records["crypto.ETH.address"] ?
            <h6>ETH Address : {stats.records["crypto.ETH.address"]}</h6>
            :
              <div>
                <h6>No ETH address</h6>
              </div>
          }
          </div>
          <div>
          {stats.records["crypto.MATIC.version.MATIC.address"] ?
            <h6>MATIC Address : {stats.records["crypto.MATIC.version.MATIC.address"]}</h6>
            :
              <div>
                <h6>No Matic address</h6>
              </div>
          }
          </div>

          <button
              className="font-roboto  mt-3 px-[60px] py-2 border-gradient-1  mb-10"
             
            >
             <a className="contactlink" target="_blank" href={`${stats.records['ipfs.redirect_domain.value']}`} rel="noreferrer">
              Website
            </a>
            </button>
         
        
        </div>
      </div>
      :
        <div>
          
        </div>
      }
    </div>
          </div>
        </div>
      </>
    );
    
}


export default Portfolio;
