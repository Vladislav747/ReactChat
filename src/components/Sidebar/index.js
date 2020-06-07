import React from 'react';
import {Button, Modal, Select, Input, Form } from 'antd';
import {TeamOutlined} from '@ant-design/icons';
import './Sidebar.scss';

const {Option} = Select;
const {Textarea} = Input;

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
    )
}

export default Sidebar;