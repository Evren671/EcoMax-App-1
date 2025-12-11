import React from "react";
import type { MenuProps } from "antd";
import { Layout, Dropdown, Space, Typography, Empty, Row, Col, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import raw from "../src/assets/raw.png"


const { Text } = Typography;

interface ToolbarProps {
    logout: () => void;
    premium: () => void;
    isPremium: boolean;
}

const Toolbar: React.FC<ToolbarProps> = ({ logout, premium, isPremium}) => {
    const username = localStorage.getItem("user")
    const items: MenuProps["items"] = [
        {
            key: "1",
            label: <Text strong>Hallo {username}</Text>,
        },
        {
            key: "2",
            label: (
                <Button onClick={premium}>
                  {isPremium ? "deactivate Premium" : "activate Premium"}
                </Button>
              ),
        },
        {
            key: "3",
            label: <Button onClick={() => logout()} >Logout</Button>,
        },
        {
            key: "4",
            label: <Empty description="Work in progress..." />,
        },
    ];

    if (isPremium) {
        items.push({
          key: "5",
          label: (
            <Text strong>
              Premium Membership Active!
            </Text>
          ),
        });
    }

    return (
        <Dropdown menu={{ items }} placement="bottomRight" arrow trigger={["click"]}>
            <Space
                style={{
                    cursor: "pointer"
                }}
            >
                <UserOutlined style={{ fontSize: '22px', color: "white" }} />
            </Space>
        </Dropdown>
    );
};

export default Toolbar;
