//Importing packages
import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

//Importing AntDesign Components
import "antd/dist/antd.css";
import { Drawer, Dropdown, Menu, Space } from "antd";

//Importing icons
import { DownOutlined } from "@ant-design/icons";
import { AiOutlineMenu } from "react-icons/ai";

const NavbarHome = () => {
  
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    if (visible == false) {
      setVisible(true);
    } else if (visible == true) {
      setVisible(false);
    }
  };

  const onClose = () => {
    setVisible(false);
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              className="text-md text-[#004F54]"
              rel="noopener noreferrer"
              href="/#about"
            >
              About
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              className="text-md text-[#004F54]"
              rel="noopener noreferrer"
              href="/start-a-clean"
            >
              Start a Clean-up
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a className="text-md text-[#004F54]" href="#map">
              Join a Clean-up
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              className="text-md text-[#004F54]"
              rel="noopener noreferrer"
              href="/log-a-clean"
            >
              Log a Clean-up
            </a>
          ),
        },
      ]}
    />
  );


  //Auth0 check to see if user is logged in
  const { user, error, isLoading } = useUser();

  if (isLoading)
    return (
      <div className="fixed z-[1002]">
        <div className=" flex justify-between w-[100vw] bg-[#004F54] text-[white] ml-[0px] px-[1em] py-[1em]">
          <div className=" rounded-sm p-[5px]  text-[#white] text-center text-[20px]">
            Loading user profile...
          </div>
        </div>
      </div>
    );

  if (error) return <div>{error.message}</div>;

  if (user) {

    return (
      <div className="fixed z-[1002]">
        <div className=" flex justify-between w-[100vw] bg-[#004F54] text-[white] ml-[0px] px-[1em] py-[1em]">
          <div className="h-10 w-10 sm:h-14 sm:w-14 relative">
            <Image
              src="/logo-app.png"
              alt="Project Clean-up logo"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <Link href="#home">
            <a className="text-[white] hidden md:flex items-center text-xl">
              Home
            </a>
          </Link>
          <Dropdown
            overlay={menu}
            className="text-[white] hidden md:flex items-center text-xl"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Get Involved
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Link href="#weather">
            <a className="text-[white] hidden md:flex items-center text-xl">
              Check Weather
            </a>
          </Link>
          <Link href="/api/auth/logout">
            <a className="text-[white] hidden md:flex items-center text-xl mr-[3em]">
              Welcome, {user.name} | Logout
            </a>
          </Link>
          <AiOutlineMenu
            className="md:hidden absolute inset-y-[2em] right-[2em]"
            size={25}
            onClick={showDrawer}
          />
        </div>

    {/* //Return this if the user is NOT logged in  */}

        <>
          <Drawer
            title="Information"
            placement="right"
            onClose={onClose}
            visible={visible}
            className="text-[#004F54]"
          >
            <ul className="flex flex-col ">
              <div className="p-4 pt-10">
                <a
                  onClick={() => setVisible(false)}
                  className="text-[#004F54] text-xl"
                  href="#home"
                >
                  Home
                </a>
              </div>
              <div className="p-4 ">
                <a
                  onClick={() => setVisible(false)}
                  className="text-[#004F54] text-xl"
                  href="/#about"
                >
                  About
                </a>
              </div>
              <div className="p-4">
                <a
                  onClick={() => setVisible(false)}
                  className="text-[#004F54] text-xl"
                  rel="noopener noreferrer"
                  href="/start-a-clean"
                >
                  Start a Clean-up
                </a>
              </div>
              <div className="p-4">
                <a
                  onClick={() => setVisible(false)}
                  className="text-[#004F54] text-xl"
                  href="#map"
                >
                  Join a Clean-up
                </a>
              </div>
              <div className="p-4">
                <a
                  onClick={() => setVisible(false)}
                  className="text-[#004F54] text-xl"
                  href="/log-a-clean"
                >
                  Log a Clean-up
                </a>
              </div>
              <div className="p-4">
                <a
                  onClick={() => setVisible(false)}
                  className="text-[#004F54] text-xl"
                  href="#weather"
                >
                  Check Weather
                </a>
              </div>
              <div className="p-4">
                <a
                  onClick={() => setVisible(false)}
                  className="text-[#004F54] text-xl"
                  href="/api/auth/logout"
                >
                  Logout
                </a>
              </div>
            </ul>
          </Drawer>
        </>
      </div>
    );
  }

  //Return this if the user is NOT logged in

  return (
    <div className="fixed z-[1002]">
      <div className=" flex justify-between w-[100vw] bg-[#004F54] text-[white] ml-[0px] px-[1em] py-[1em]">
        <div className="h-10 w-10 sm:h-14 sm:w-14 relative">
          <Image
            src="/logo-app.png"
            alt="Project Clean-up logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Link href="#home">
          <a className="text-[white] hidden md:flex items-center text-xl">
            Home
          </a>
        </Link>
        <Dropdown
          overlay={menu}
          className="text-[white] hidden md:flex items-center text-xl"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Get Involved
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Link href="#weather">
          <a className="text-[white] hidden md:flex items-center text-xl">
            Check Weather
          </a>
        </Link>
        <Link href="/api/auth/login">
          <a className="text-[white] hidden md:flex items-center text-xl mr-[3em]">
            Login
          </a>
        </Link>
        <AiOutlineMenu
          className="md:hidden absolute inset-y-[2em] right-[2em]"
          size={25}
          onClick={showDrawer}
        />
      </div>
      <>
        <Drawer
          title="Information"
          placement="right"
          onClose={onClose}
          visible={visible}
          className="text-[#004F54]"
        >
          <ul className="flex flex-col ">
            <div className="p-4 pt-10">
              <a
                onClick={() => setVisible(false)}
                className="text-[#004F54] text-xl"
                href="#home"
              >
                Home
              </a>
            </div>
            <div className="p-4 ">
              <a
                onClick={() => setVisible(false)}
                className="text-[#004F54] text-xl"
                href="/#about"
              >
                About
              </a>
            </div>
            <div className="p-4">
              <a
                onClick={() => setVisible(false)}
                className="text-[#004F54] text-xl"
                rel="noopener noreferrer"
                href="/start-a-clean"
              >
                Start a Clean-up
              </a>
            </div>
            <div className="p-4">
              <a
                onClick={() => setVisible(false)}
                className="text-[#004F54] text-xl"
                href="#map"
              >
                Join a Clean-up
              </a>
            </div>
            <div className="p-4">
              <a
                onClick={() => setVisible(false)}
                className="text-[#004F54] text-xl"
                href="/log-a-clean"
              >
                Log a Clean-up
              </a>
            </div>
            <div className="p-4">
              <a
                onClick={() => setVisible(false)}
                className="text-[#004F54] text-xl"
                href="#weather"
              >
                Check Weather
              </a>
            </div>
            <div className="p-4">
              <a
                onClick={() => setVisible(false)}
                className="text-[#004F54] text-xl"
                href="/api/auth/login"
              >
                Login
              </a>
            </div>
          </ul>
        </Drawer>
      </>
    </div>
  );
};

export default NavbarHome;

/*
SideBar Menu Plan

Make seperate div that shows up when screen size is half(md)
In that div we need:
  - Close icon
  - Links

- needs to have green bg
- needs to be as tall as the screen
- needs to open and close when hamburger icon/ x icon is clicked
*/
