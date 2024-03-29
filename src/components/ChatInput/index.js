import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";

import { UploadFiles } from "../../components";

import { ReactComponent as MicIcon } from "../../assets/icons/MicIcon.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/UploadIcon.svg";
import { ReactComponent as EmojiIcon } from "../../assets/icons/SmileIcon.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/SendIcon.svg";

import "./ChatInput.scss";

/**
 * Компонент Ввода в чате
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ChatInput = (props) => {
    const {
        emojiPickerVisible,
        value,
        addEmoji,
        setValue,
        handleSendMessage,
        sendMessage,
        toggleEmojiPicker,
        attachments,
        onSelectFiles,
        isRecording,
        onRecord,
        onHideRecording,
        removeAttachment,
        isLoading,
    } = props;

    return (
        <Fragment>
            <div className="chat-input">
                <div>
                    <div className="chat-input__smile-btn">
                        <div className="chat-input__emoji-picker">
                            {emojiPickerVisible && (
                                <Picker
                                    onSelect={(emojiTag) => addEmoji(emojiTag)}
                                    set="apple"
                                />
                            )}
                        </div>
                        <EmojiIcon
                            className="emoji-icon"
                            onClick={toggleEmojiPicker}
                        />
                    </div>
                    {isRecording ? (
                        <div className="chat-input__record-status">
                            <i className="chat-input__record-status-bubble"></i>
                            Recording...
                            <Button
                                onClick={onHideRecording}
                                type="link"
                                shape="circle"
                                icon="close"
                                className="stop-recording"
                            />
                        </div>
                    ) : (
                        <textarea
                            className="chat-input__textarea"
                            onChange={(e) => setValue(e.target.value)}
                            onKeyUp={handleSendMessage}
                            placeholder="Введите текст сообщения…"
                            value={value}
                        />
                    )}

                    <div className="chat-input__actions">
                        <UploadField
                            onFiles={onSelectFiles}
                            containerProps={{
                                className: "chat-input__actions-upload-btn",
                            }}
                            uploadProps={{
                                accept: ".jpg,.jpeg,.png,.gif,.bmp",
                                multiple: "multiple",
                            }}
                        >
                            <UploadIcon />
                        </UploadField>
                        {isLoading ? (
                            <Button type="link" shape="circle" icon="loading" />
                        ) : isRecording || value || attachments.length ? (
                            <button
                                className="chat-input__send-btn"
                                onClick={sendMessage}
                            >
                                Отправить
                                <SendIcon />
                            </button>
                        ) : (
                            <div className="chat-input__record-btn">
                                <MicIcon onClick={onRecord} />
                            </div>
                        )}
                    </div>
                </div>
                {!!attachments.length && (
                    <div className="chat-input__attachments">
                        <UploadFiles
                            removeAttachment={removeAttachment}
                            attachments={attachments}
                        />
                    </div>
                )}
            </div>
        </Fragment>
    );
};

ChatInput.propTypes = {
    className: PropTypes.string,
};

export default ChatInput;
