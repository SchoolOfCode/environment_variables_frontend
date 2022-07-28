// import SocialMedia from "../SocialMedia/SocialMedia"
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";

 
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';

const App = () => {
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Start A Cleanup
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            Join A Cleanup
          </a>
        ),
      },
    ]}
  />
);

export default function Navbar() {
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
        />
      </div>
      <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
    </div>
  );
}

//SideBar Menu Plan

// Make seperate div that shows up when screen size is half(md)
// In that div we need:
// Close icon
// Links

// needs to have green bg
// needs to be as tall as the screen
// needs to open and close when hamburger icon/ x icon is clicked
