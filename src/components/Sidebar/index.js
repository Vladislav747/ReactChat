import React from "react";
import { Button, Modal, Select, Input, Form } from "antd";
import { Dialogs } from "../../containers";

import "./Sidebar.scss";
import { ReactComponent as PlusIcon } from "../../assets/icons/PlusIcon.svg";

const { Option } = Select;
const { TextArea } = Input;

/**
 * Левый Sidebar с диалогами
 * @param user
 * @param visible
 * @param inputValue
 * @param messageText
 * @param selectedUserId
 * @param isLoading
 * @param users
 * @param onShow
 * @param onClose
 * @param onSearch
 * @param onChangeInput
 * @param onSelectUser
 * @param onChangeTextArea
 * @param onModalOk
 * @returns {JSX.Element}
 * @constructor
 */
const Sidebar = ({
    user,
    visible,
    inputValue,
    messageText,
    selectedUserId,
    isLoading,
    users,
    onShow,
    onClose,
    onSearch,
    onChangeInput,
    onSelectUser,
    onChangeTextArea,
    onModalOk,
}) => {
    const options = users.map((user) => (
        <Option key={user._id}>{user.fullname}</Option>
    ));

    return (
        <div className="chat__sidebar">
            <div className="chat__sidebar-header">
                <div>
                    <span>Список диалогов</span>
                </div>
                <PlusIcon
                    className="plus-icon"
                    onClick={onShow}
                    alt="оздать диалог"
                />
            </div>

            <div className="chat__sidebar-dialogs">
                <Dialogs userId={user && user._id} />
            </div>
            <Modal
                title="Создать диалог"
                visible={visible}
                onCancel={onClose}
                footer={[
                    <Button key="back" onClick={onClose}>
                        Закрыть
                    </Button>,
                    <Button
                        disabled={!messageText}
                        key="submit"
                        type="primary"
                        loading={isLoading}
                        onClick={onModalOk}
                    >
                        Создать
                    </Button>,
                ]}
            >
                <Form className="add-dialog-form">
                    <Form.Item label="Введите имя пользователя или E-Mail">
                        <Select
                            value={inputValue}
                            onSearch={onSearch}
                            onChange={onChangeInput}
                            onSelect={onSelectUser}
                            notFoundContent={null}
                            style={{ width: "100%" }}
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            placeholder="Введите имя пользователя или почту"
                            showSearch
                        >
                            {options}
                        </Select>
                    </Form.Item>
                    {selectedUserId && (
                        <Form.Item label="Введите текст сообщения">
                            <TextArea
                                autosize={{ minRows: 3, maxRows: 10 }}
                                onChange={onChangeTextArea}
                                value={messageText}
                            />
                        </Form.Item>
                    )}
                </Form>
            </Modal>
        </div>
    );
};

Sidebar.defaultProps = {
    users: [],
};

export default Sidebar;
