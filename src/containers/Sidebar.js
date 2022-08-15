import React, { useState } from "react";
import { connect } from "react-redux";

import { userApi, dialogsApi } from "../utils/api";
import { Sidebar } from "../components";
import { dialogsActions } from "../redux/actions";

const SidebarContainer = ({ user, fetchDialogs }) => {
    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messageText, setMessageText] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(false);

    const onClose = () => {
        setVisible(false);
    };

    const onShow = () => {
        setVisible(true);
    };

    const onSearch = (value) => {
        setIsLoading(true);
        userApi
            .findUsers(value)
            .then(({ data }) => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    };

    const onAddDialog = () => {
        dialogsApi
            .create({
                partner: selectedUserId,
                text: messageText,
            })
            .then(fetchDialogs)
            .then(onClose)
            .catch(() => {
                setIsLoading(false);
            });
    };

    const handleChangeInput = (value) => {
        setInputValue(value);
    };

    const onChangeTextArea = (e) => {
        setMessageText(e.target.value);
    };

    const onSelectUser = (userId) => {
        setSelectedUserId(userId);
    };

    return (
        <Sidebar
            user={user}
            inputValue={inputValue}
            visible={visible}
            isLoading={isLoading}
            onClose={onClose}
            onShow={onShow}
            onSearch={onSearch}
            onChangeInput={handleChangeInput}
            onSelectUser={onSelectUser}
            onModalOk={onAddDialog}
            onChangeTextArea={onChangeTextArea}
            messageText={messageText}
            selectedUserId={selectedUserId}
            users={users}
        />
    );
};

export default connect(({ user }) => ({ user: user.data }), dialogsActions)(SidebarContainer);
