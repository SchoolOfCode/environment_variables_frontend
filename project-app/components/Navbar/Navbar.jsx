// import SocialMedia from "../SocialMedia/SocialMedia"
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Button, Drawer } from "antd";
import React, { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
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
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              About Us
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="#startclean">
              Start A Cleanup
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="#map">
              Join A Cleanup
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <div className="fixed">
      <div className=" flex justify-between w-[100vw] bg-[#004F54] text-[white] ml-[0px] px-[2em] py-[2em]">
        <div>Logo</div>
        <Link href="#home">
          <a className="text-[white] hidden md:flex items-center ">Home</a>
        </Link>
        <Dropdown
          overlay={menu}
          className="text-[white] hidden md:flex items-center"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Do Your Part
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Link href="#weather">
          <a className="text-[white] hidden md:flex items-center ">Weather</a>
        </Link>
        <Link href="#contact">
          <a className="text-[white] hidden md:flex items-center ">Contact</a>
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
          <ul className="flex flex-col">
            <div className="p-4">
              <a className="text-[#004F54] text-xl" href="#home">
                Home
              </a>
            </div>
            <div className="p-4">
              <a className="text-[#004F54] text-xl" href="about">
                About
              </a>
            </div>
            <div className="p-4">
              <a className="text-[#004F54] text-xl" href="#map">
                Join A Cleanup
              </a>
            </div>
            <div className="p-4">
              <a className="text-[#004F54] text-xl" href="#startcleanup">
                Start A Cleanup
              </a>
            </div>
            <div className="p-4">
              <a className="text-[#004F54] text-xl" href="#weather">
                Weather
              </a>
            </div>
            <div className="p-4">
              <a className="text-[#004F54] text-xl" href="#contact">
                Contact
              </a>
            </div>
          </ul>
        </Drawer>
      </>
    </div>
  );
};

export default Navbar;
//SideBar Menu Plan

// Make seperate div that shows up when screen size is half(md)
// In that div we need:
// Close icon
// Links

// needs to have green bg
// needs to be as tall as the screen
// needs to open and close when hamburger icon/ x icon is clicked
