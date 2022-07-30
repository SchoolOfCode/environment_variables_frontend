
import Link from "next/link"
import {AiFillFacebook,AiFillInstagram,AiOutlineTwitter} from "react-icons/ai";





export default function Footer () {
    return (
        <footer className=" border-black border-2 h-20 m-[0.2rem] pl-[43%] bg-[#004F54]">
        <div class="flex justify-evenly items-center space-x-8 space-y-1 h-auto w-min">
          <div class="item w-12 h-12"><a href="https://www.facebook.com" target='blank'><AiFillFacebook className="h-12 w-12 rounded-md m-0 shadow-md text-gray-50"/></a></div>
          <div class="item w-12 h-12"><a href="https://www.instagram.com" target='blank'><AiFillInstagram className="h-12 w-12 rounded-md m-0 shadow-md text-gray-50"/></a></div>
          <div class="item w-12 h-12"><a href="https://www.twitter.com" target='blank'><AiOutlineTwitter className="h-12 w-12 rounded-md m-0 shadow-md text-gray-50"/></a></div>
        </div>
        <p className="text-base pl-[4%] m-[.1rem] tracking-wider font-normal text-gray-50"> Copyright &copy;2022</p>
      </footer>
    )
}

