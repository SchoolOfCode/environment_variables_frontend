import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className=" h-[6rem] m-[0] pl-[41%] bg-[#004F54]">
      <div className="flex justify-evenly items-center space-x-8 space-y-1 h-auto w-min p-[.6rem]">
        <div className="item w-12 h-12">
          <a href="https://www.facebook.com" target="blank">
            <AiFillFacebook className="h-12 w-12 rounded-md m-0 shadow-md text-gray-50" />
          </a>
        </div>
        <div className="item w-12 h-12">
          <a href="https://www.instagram.com" target="blank">
            <AiFillInstagram className="h-12 w-12 rounded-md m-0 shadow-md text-gray-50" />
          </a>
        </div>
        <div className="item w-12 h-12">
          <a href="https://www.twitter.com" target="blank">
            <AiOutlineTwitter className="h-12 w-12 rounded-md m-0 shadow-md text-gray-50" />
          </a>
        </div>
      </div>
      <p className="text-base pl-[4%] tracking-wider font-normal text-gray-50">
        Copyright &copy;2022
        
      </p>
    </footer>
  );
}
