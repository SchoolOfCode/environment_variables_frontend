
import Link from "next/link"
import {AiFillFacebook,AiFillInstagram,AiOutlineTwitter} from "react-icons/ai";





export default function Footer () {
    return (
        <footer className="">
        <div class="social-media">

        <Link href="https://www.facebook.com">
          <a><AiFillFacebook/></a>
        </Link>
        <Link href="/">
          <a><AiFillInstagram/></a>
        </Link>
        <Link href="/">
          <a><AiOutlineTwitter/></a>
        </Link>

       
      </div>
      </footer>
    )
}

