import React, { useEffect, useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { Empty } from "antd";
import find from "lodash/find";

import { messagesActions } from "../redux/actions";
import socket from "../core/socket";

import { Messages as BaseMessages } from "../components";

const Messages = ({
    currentDialog,
    fetchMessages,
    addMessage,
    items,
    user,
    isLoading,
    removeMessageById,
    attachments,
}) => {
    const [previewImage, setPreviewImage] = useState(null);
    const [blockHeight, setBlockHeight] = useState(135);
    const [isTyping, setIsTyping] = useState(false);
    let typingTimeoutId = useRef(null);
    const messagesRef = useRef(null);

    const onNewMessage = (data) => {
        addMessage(data);
    };

    const toggleIsTyping = useCallback(() => {
        setIsTyping(true);
        clearInterval(typingTimeoutId.current);
        typingTimeoutId.current = setTimeout(() => {
            setIsTyping(false);
        }, 3000);
    }, []);

    useEffect(() => {
        socket.on("DIALOGS:TYPING", toggleIsTyping);
    }, [toggleIsTyping]);

    useEffect(() => {
        if (attachments.length) {
            setBlockHeight(245);
        } else {
            setBlockHeight(135);
        }
    }, [attachments]);

    useEffect(() => {
        if (currentDialog) {
            fetchMessages(currentDialog._id);
        }

        socket.on("SERVER:NEW_MESSAGE", onNewMessage);

        return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDialog]);

    useEffect(() => {
        if (messagesRef?.current) messagesRef.current.scrollTo(0, 999999);
    }, [items, isTyping]);

    return !currentDialog ? (
        <Empty description="Откройте диалог" />
    ) : (
        <BaseMessages
            user={user}
            blockRef={messagesRef}
            items={items}
            isLoading={isLoading && !user}
            onRemoveMessage={removeMessageById}
            setPreviewImage={setPreviewImage}
            previewImage={previewImage}
            blockHeight={blockHeight}
            isTyping={isTyping}
            partner={
                user._id !== currentDialog.partner._id
                    ? currentDialog.author
                    : currentDialog.partner
            }
        />
    );
};

export default connect(
    ({ dialogs, messages, user, attachments }) => ({
        currentDialog: find(dialogs.items, { _id: dialogs.currentDialogId }),
        items: messages.items,
        isLoading: messages.isLoading,
        attachments: attachments.items,
        user: user.data,
    }),
    messagesActions
)(Messages);
