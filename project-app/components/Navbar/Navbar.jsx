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
    if(visible == false){
      setVisible(true);
    } else if (visible == true) {
      setVisible(false)
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
              target="_blank"
              rel="noopener noreferrer"
              href="/about"
            >
              About Us
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="/start-a-clean">
              Start A Cleanup
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a href="#map">
              Join A Cleanup
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <div className="fixed z-[1002]">
      <div className=" flex justify-between w-[100vw] bg-[#004F54] text-[white] ml-[0px] px-[2em] py-[2em]">
        <div className="underline rounded-sm p-[5px] bg-[#006C72] text-[#white] text-[20px]">Project Clean-Up</div>
        <Link href="#home">
          <a className="text-[white] hidden md:flex items-center text-xl">Home</a>
        </Link>
        <Dropdown
          overlay={menu}
          className="text-[white] hidden md:flex items-center text-xl"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Do Your Part
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Link href="#weather">
          <a className="text-[white] hidden md:flex items-center text-xl">Weather</a>
        </Link>
        <Link href="#contact">
          <a className="text-[white] hidden md:flex items-center text-xl mr-[3em]">Contact</a>
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
            <div className="p-4 pt-10" >
              <a onClick={ () => setVisible(false)} className="text-[#004F54] text-xl" href="#home">
                Home
              </a>
            </div>
            <div className="p-4 ">
              <a onClick={ () => setVisible(false)} className="text-[#004F54] text-xl" href="about">
                About
              </a>
            </div>
            <div className="p-4">
              <a onClick={ () => setVisible(false)} className="text-[#004F54] text-xl" href="#map">
                Join A Cleanup
              </a>
            </div>
            <div className="p-4">
              <a onClick={ () => setVisible(false)} className="text-[#004F54] text-xl" rel="noopener noreferrer" href="/start-a-clean">
                Start A Cleanup
              </a>
            </div>
            <div className="p-4">
              <a onClick={ () => setVisible(false)} className="text-[#004F54] text-xl" href="#weather">
                Weather jena
              </a>
            </div>
            <div className="p-4">
              <a onClick={ () => setVisible(false)} className="text-[#004F54] text-xl" href="#contact">
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
