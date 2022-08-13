import {React, useRef, useState} from 'react'
import Image from 'next/image';
import spinner from "../public/icons/Spinner.gif";


export default function MintNFT() {

  const handleInputChange = (e) => {
    const val = e.target.value;
    setUserName(val);
  };
  const handleValueChange = (e) => {
    const val = e.target.value;
    setDescription(val);
    };
    
    const inputRef = useRef(null);
    const [userName, setUserName] = useState("");
    const [description, setDescription] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [metamaskAccount, setMetamaskAccount] = useState("");


      const onSubmit = async (params) => {
        const form = new FormData();
        console.log(inputRef);
        form.append("file", inputRef.current.files[0]);

        const options = {
          method: "POST",
          body: form,
          headers: {
            Authorization: "0f9b00bf-73e0-4c0c-8691-06e70948d2b6",
          },
        };

        await fetch("https://api.nftport.xyz/v0/files", options)
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            // Handle the response
            console.log(responseJson);
            console.log(responseJson.ipfs_url);

            setimgUrl(responseJson.ipfs_url);

            // const { ipfs_url } = responseJson;
            // document.getElementById('image').textContent = image;
          });

        await fetch(
          "https://api.nftport.xyz/v0/mints/easy/files?" +
            new URLSearchParams({
              chain: "polygon",
              name: userName,
              description: description,
              mint_to_address: metamaskAccount,
            }),
          options
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (responseJson) {
            // Handle the response
            console.log(responseJson);
          });
      };


  return (
    <div className=" bg-[#0f172a4d] rounded-3xl p-7 mt-6">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h4>MINT YOUR NFT</h4>

            <div className="flex flex-col mt-8">
              <input
                type="text"
                placeholder="UserName"
                className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[400px] mb-5"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Description"
                className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[400px]"
                onChange={handleValueChange}
              />
            </div>
            <form>
              <input
                type="file"
                className="border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[400px] mt-5"
                id="myFile"
                name="filename"
                ref={inputRef}
              />
            </form>
          </div>
          <div className="flex mt-10 mb-10 space-x-4">
            <button
              className="font-roboto  border-2 px-[40px] py-2 border-[#6633FF] hover:bg-[#6633FF]"
              onClick={onSubmit}
            >
              MINT NFT
            </button>
          </div>

          <div className="flex space-x-3">
            <button className="font-roboto  border-2 px-[60px] py-2 border-[#22C55E] hover:bg-[#22C55E]">
              EDIT
            </button>
            <button className="font-roboto  border-2 px-[60px] py-2 border-[#22C55E] hover:bg-[#22C55E]">
              SAVE
            </button>
          </div>
        </div>

        <div className="mr-10 mt-10">
          <Image
            src={imgUrl ? imgUrl : spinner}
            width={100}
            height={100}
            alt="NFT"
          />
        </div>
      </div>
    </div>
  );
}
