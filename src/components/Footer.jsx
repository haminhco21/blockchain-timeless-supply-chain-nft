import timelessLogo from "../assets/timeless.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.25] justify-center items-center">
          <img src={timelessLogo} alt="logo" className="w-32" />
        </div>

        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Minh Tu
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Vẫn Là Minh Tu
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Cũng Vẫn Là Minh Tú
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Đây cũng là của Minh Tú
          </p>
        </div>
      </div>
      <div className="justify-center items-center ">
        <p className="text-white text-right text-xs">
          &copy;{year} Bản quyền do Minh Tú
        </p>
      </div>
    </div>
  );
};

export default Footer;
