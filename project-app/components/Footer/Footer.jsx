import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full h-[6rem] m-[0] pl-1 pr-1 sm:pl-4 sm:pr-4 bg-[#004F54]">
      {/* Logo div */}
      <div className="text-white ml-2">logo here</div>
      <div className="mt-3 sm:mt-6">
        <span className="text-white text-[9px] sm:text-[14px] ">
          Built by Project-Cleanup
        </span>
        <p className="text-[9px] sm:text-[12px] pl-[15%] tracking-wider font-normal text-gray-50">
          Copyright &copy;2022
        </p>
      </div>
      {/* Social Icons div */}
      <div className="flex flex-row w-28 sm:w-60 justify-between sm:justify-evenly items-center space-y-1 h-auto w-min p-[.6rem]">
        <div className="item w-6 h-6 sm:w-8 sm:h-8">
          <a href="https://www.facebook.com" target="blank">
            <AiFillFacebook className="h-6 w-6 sm:h-8 sm:w-8 rounded-md mr-4 shadow-md text-gray-50" />
          </a>
        </div>
        <div className="item w-6 h-6 sm:w-8 sm:h-8">
          <a href="https://www.instagram.com" target="blank">
            <AiFillInstagram className="h-6 w-6 sm:h-8 sm:w-8 rounded-md mr-4 shadow-md text-gray-50" />
          </a>
        </div>
        <div className="item w-6 h-6 sm:w-8 sm:h-8">
          <a href="https://www.twitter.com" target="blank">
            <AiOutlineTwitter className="h-6 w-6 sm:h-8 sm:w-8 mr-2 rounded-md shadow-md text-gray-50" />
          </a>
        </div>
      </div>
      {/* copyright div */}
    </footer>
  );
}
