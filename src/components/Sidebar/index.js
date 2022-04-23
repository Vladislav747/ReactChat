import React from "react";

import { TeamOutlined } from "@ant-design/icons";

import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="chat__sidebar">
            <div className="chat__sidebar-header">
                <div>
                    <TeamOutlined />
                    <span>Список диалогов</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
