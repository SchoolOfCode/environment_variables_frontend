// import SocialMedia from "../SocialMedia/SocialMedia"
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";
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
            1st menu item
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
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ]}
  />
);

export default function Navbar() {
  return (
    <div className="flex justify-between w-[100vw] bg-[#004F54]">
      <a href="#home">Home</a>
      <Dropdown overlay={menu} className="text-[pink]">
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <a href="#weather">Weather</a>
      <a href="#contact">Contact Us</a>
    </div>
  );
}

// padding 2em
// 100vw container
// padding top and bottom 2em
