// import SocialMedia from "../SocialMedia/SocialMedia"
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";

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
    <div>
      <div className=" flex justify-between w-[100vw] bg-[#004F54] text-[white] ml-[0px] px-[2em] py-[2em]">
        
        <Link href="#home">
          <a className="text-[white] hidden md:flex items-center space-x-1">Home</a>
        </Link>
        <Dropdown overlay={menu} className="text-[white] hidden md:flex items-center space-x-1">
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Do Your Part
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Link href="#weather">
          <a className="text-[white] hidden md:flex items-center space-x-1">Weather</a>
        </Link>
        <Link href="#contact">
          <a className="text-[white] hidden md:flex items-center space-x-1">Contact</a>
        </Link>
        </div>
    </div>
  );
}

// padding 2em
// 100vw container
// padding top and bottom 2em
