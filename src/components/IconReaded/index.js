import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

import "./IconReaded.scss";

const IconReaded = ({ isMe, isReaded }) => (
    <div
        className={classNames("message__icon-wrapper", {
            "message__icon-wrapper--isme": isMe,
        })}
    >
        {isReaded ? (
            <img
                className={"message__icon-readed"}
                src={readedSvg}
                alt="Readed icon"
            />
        ) : (
            <img
                className={"message__icon-readed message__icon-readed--no"}
                src={noReadedSvg}
                alt="No readed icon"
            />
        )}
    </div>
);

IconReaded.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
};

export default IconReaded;
