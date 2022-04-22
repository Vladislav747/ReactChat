import React from "react";
import PropTypes from "prop-types";
import {Button as BaseButton} from "antd";
//A simple JavaScript utility for conditionally joining classNames together.
import classNames from "classnames";

import "./Button.scss";

const Button = (props) => (<BaseButton className={classNames("button", props.className)} {...props} />);

Button.propTypes = {
    className: PropTypes.string,
};

export default Button;