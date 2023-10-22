import { FaTimes } from "react-icons/fa";
import { setGlobalState, useGlobalState } from "../store";
import Identicon from "react-identicons";
const ShowNFT = () => {
  const [showModal] = useGlobalState("showModal");

  const imgHero =
    "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const closeModal = () => {
    setGlobalState("showModal", "scale-0");
  };

  return (
    <div
      className={`fixed top-0 left-0
       w-screen h-screen flex items-center  
        justify-center bg-black bg-opacity-50
        transform  transition-transform duration-300 ${showModal} z-0`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex justify-between items-center text-gray-400">
          <p className="font-semibold">Buy NFT</p>
          <button
            type="button"
            onClick={closeModal}
            className="border-0 bg-transparent focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex justify-center items-center rounded-xl mt-5">
          <div className="shrink-0 rounded-xl  overflow-hidden h-40 w-40">
            <img
              className="h-full w-full object-cover cursor-pointer"
              src={imgHero}
              alt="NFT"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start rounded-xl mt-5">
          <h4 className="text-white font-semibold">Title</h4>
          <p className="text-gray-400 text-sm my-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            veritatis, sequi expedita incidunt voluptatem voluptates nobis sed
            minus odio rerum? Alias cumque dolorum nobis sint quod harum
            tempora. Voluptatum, dolor?
          </p>

          <div className="flex justify-between items-center mt3 text-white">
            <div>
              <Identicon
                string={"asdfqwet"}
                size={50}
                className="h-10 object-contain rounded-full mr-3"
              />

              <div className="flex flex-col justify-center items-start">
                <small className="text-white font-bold">@ower</small>
                <small className="text-pink-800 font-semibold">
                  0x31...03f2
                </small>
              </div>
            </div>

            <div className=" flex flex-col text-white ">
              <small className="text-xs">Current Price</small>
              <p className="text-sm font-semibold">0.34 ETH</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          {/* <button className="w-full p-2 mt-5 shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bf255f] rounded-full px-2.5 py-2 mr-2">
            Add to Cart
          </button> */}
          <button className="w-full p-2 mt-5 shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bf255f] rounded-full px-2.5 py-2 mr-2">
            Buy Now
          </button>
          <button className="w-full p-2 mt-5 shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bf255f] rounded-full px-2.5 py-2"
          onClick={() => setGlobalState("updateModal", "scale-100")}
          >
            Change Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowNFT;
