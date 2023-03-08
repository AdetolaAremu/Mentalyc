import React from "react";
import helpImg from "../assets/images/Help.png";
import image from "../assets/images/Vector.png";

const header = ({ toggleModal }) => {
  return (
    <div>
      <div>
        <div className="px-5 lg:px-20 mt-7">
          <img src={image} alt="logo" />
        </div>
        <div className="bg-[#731054] h-1 my-5 w-full"></div>
      </div>
      <div className="flex justify-between px-5 lg:px-20">
        <div>
          <div>Hi, Maria</div>

          <div className="font-bold text-xl lg:text-2xl mt-3">
            Upload your session’s recordings
          </div>
        </div>
        <div>
          <img src={helpImg} alt="help" />
        </div>
      </div>
      <div className="mt-5 px-5 lg:px-20">
        <button
          onClick={toggleModal}
          className="bg-gradient-to-r from-[#731054] to-[#DE0D6F] w-full text-white font-bold py-1 rounded-md"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default header;
