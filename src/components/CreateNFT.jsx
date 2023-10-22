import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { setGlobalState, useGlobalState } from "../store";

const CreateNFT = () => {
  const [modal] = useGlobalState("modal");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [imgBase64, setImgBase64] = useState(null);
  const imgHero =
    "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !description) return;
    console.log("Minted...");
    console.log(fileUrl);
    console.log("Title", title);
    console.log("Price", price);
    console.log("Description", description);
    // resetForm();
  };

  const closeModal = () => {
    setGlobalState("modal", "scale-0");
    resetForm();
  };

  const resetForm = () => {
    setFileUrl("");
    setImgBase64(null);
    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <div
      className={`fixed top-0 left-0
       w-screen h-screen flex items-center  
        justify-center bg-black bg-opacity-50
        transform  transition-transform duration-300 ${modal} z-0`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6 z-10">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Add NFT</p>
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl  overflow-hidden h-20 w-20">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={imgBase64 || imgHero}
                alt="NFT"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <label className="block">
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/jpg, image/webp"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none cursor-pointer focus:ring-0 hover:file:text-white hover:file:cursor-pointer"
                required
              />
            </label>
          </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="bg-transparent border-0 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none  focus:ring-0 hover:file:text-white"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              name="title"
              required
            />
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

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              className="h-20 resize-none bg-transparent border-0 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none  focus:ring-0 hover:file:text-white"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Description"
              name="description"
              required
            />
          </div>
          <button className="items-center flex justify-center p-2 mt-5 shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bf255f] rounded-full px-2.5 py-2">
            Mint Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNFT;
