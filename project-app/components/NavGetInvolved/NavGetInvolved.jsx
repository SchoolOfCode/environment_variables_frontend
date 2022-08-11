import NavButton from "../Landing/NavButton/NavButton"
import Link from "next/link";

const NavGetInvolved = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-[3em] space-y-[2rem] mt-[2rem] mb-[2rem] md:space-y-[0]">
              <Link href="#map">
                <a>
                  <NavButton
                    buttonText="Join A Clean"
                    className="flex items-center justify-center"
                  />
                </a>
              </Link>
              <Link rel="noopener noreferrer" href="/start-a-clean">
                <a>
                  <NavButton
                    buttonText="Start A Clean"
                    className="flex items-center justify-center"
                  />
                </a>
              </Link>
              <Link rel="noopener noreferrer" href="/log-a-clean">
                <a>
                  <NavButton
                    buttonText="Log A Clean"
                    className="flex items-center justify-center"
                  />
                </a>
              </Link>
            </div>
    )
}

export default NavGetInvolved;