import React from "react";
import PropTypes from "prop-types";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";

import "./Message.scss";
import { IconReaded } from "../";

const Message = ({
    avatar,
    fullname,
    text,
    date,
    isMe,
    attachments,
    user,
    isReaded,
}) => {
    return (
        <div className={classNames("message", { "message--isme": isMe })}>
            <div className="message__info">
                {avatar && (
                    <div className="message__avatar">
                        <img src={avatar} alt={`Avatar ${fullname}`} />
                    </div>
                )}
                <div className="message__content">
                    <div className="message__bubble">
                        <p className="message__text">{text}</p>
                    </div>
                    <div className="message__attachments">
                        {attachments &&
                            attachments.map((item) => (
                                <div
                                    className="message__attachments-item"
                                    key={item.url}
                                >
                                    <img src={item.url} alt={item.filename} />
                                </div>
                            ))}
                    </div>

                    {date && (
                        <div className="message__date">
                            {distanceInWordsToNow(date, {
                                addSuffix: true,
                                locale: ruLocale,
                            })}
                        </div>
                    )}

                    <IconReaded isMe={isMe} isReaded={isReaded} />
                </div>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {},
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    fullname: PropTypes.string,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    attachments: PropTypes.array,
    user: PropTypes.object,
};

export default Message;
