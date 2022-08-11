import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full h-[6rem] px-1 sm:px-4 bg-[#004F54]">
      {/* Logo */}
      <div className="flex flex-row h-auto w-1/4 sm:w-56">
        <div className="h-12 w-12 sm:h-16 sm:w-16 relative">
          <Image
            src="/logo-app.png"
            alt="Project Clean-up logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Built by and copyright */}
      <div className="mt-3 sm:mt-6 text-center">
        <span className="text-white text-xs sm:text-sm">
          Built by the Environment Variables
        </span>
        <p className="text-[.5rem] sm:text-xs text-gray-50">
          Copyright &copy;2022
        </p>
      </div>
      {/* Social Icons*/}
      <div className="flex flex-row h-auto w-1/4 sm:w-56 justify-end">
        <div className="item w-6 h-6 sm:w-10 sm:h-8 sm:m2">
          <a href="https://www.facebook.com" target="blank">
            <AiFillFacebook className="h-6 w-6 sm:h-8 sm:w-8 rounded-md mr-4 text-gray-50" />
          </a>
        </div>
        <div className="item w-6 h-6 sm:w-10 sm:h-8">
          <a href="https://www.instagram.com" target="blank">
            <AiFillInstagram className="h-6 w-6 sm:h-8 sm:w-8 rounded-md mr-4 text-gray-50" />
          </a>
        </div>
        <div className="item w-6 h-6 sm:w-10 sm:h-8">
          <a href="https://www.twitter.com" target="blank">
            <AiOutlineTwitter className="h-6 w-6 sm:h-8 sm:w-8 mr-2 rounded-md text-gray-50" />
          </a>
        </div>
      </div>
    </footer>
  );
}
