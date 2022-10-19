import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Button, Popover } from "antd";

import { ReactComponent as CircleDownIcon } from "../../assets/icons/CircleDownIcon.svg";

import "./Status.scss";

const Status = ({ online, fullname, deleteDialog }) => (
    <div className="chat__dialog-header">
        <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">{fullname}</b>
            <div className="chat__dialog-header-status">
                <span
                    className={classNames("status", {
                        "status--online": online,
                    })}
                >
                    {online ? "онлайн" : "офлайн"}
                </span>
            </div>
        </div>
        <Popover
            className="chat__dialog-header-action"
            content={
                <div>
                    <Button onClick={deleteDialog}>Удалить диалог</Button>
                </div>
            }
            trigger="click"
        >
            <div>
                <CircleDownIcon className="chat__dialog-circle-down" />
            </div>
        </Popover>
    </div>
);

Status.propTypes = {
    online: PropTypes.bool,
};

export default Status;
