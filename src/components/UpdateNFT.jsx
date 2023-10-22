import React, { useState } from 'react'
import { setGlobalState, useGlobalState } from '../store';
import { FaTimes } from "react-icons/fa";

const UpdateNFT = () => {
    const [updateModal] = useGlobalState("updateModal")

    const [price, setPrice] = useState("");
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(price);
    }

  
    const closeModal = () => {
      setGlobalState("updateModal", "scale-0");
      setGlobalState("showModal", "scale-100");
      resetForm()
    };

    const resetForm = () => {
        setPrice('');
    }
  

    return (
      <div
        className={`fixed top-0 left-0
         w-screen h-screen flex items-center  
          justify-center bg-black bg-opacity-50
          transform  transition-transform duration-300 ${updateModal} z-0`}
      >
        <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6 z-10">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex justify-between items-center text-gray-400">
              <p className="font-semibold">Update NFT</p>
              <button
                type="button"
                onClick={closeModal}
                className="border-0 bg-transparent focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>
  
           
           
  
            <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
              <input
                className="bg-transparent border-0 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none  focus:ring-0 hover:file:text-white"
                type="number"
                min={0.01}
                step={0.01}
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder="Price(ETH)"
                name="price"
                required
              />
            </div>
  
            <button className="items-center flex justify-center p-2 mt-5 shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bf255f] rounded-full px-2.5 py-2">
              Update NFT
            </button>
          </form>
        </div>
      </div>
    );
}

export default UpdateNFT