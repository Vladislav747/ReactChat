import React from 'react';
import PropTypes from "prop-types";

//A simple JavaScript utility for conditionally joining classNames together.
import classNames from "classnames";

import './Block.scss';

const Block = ({children, className}) => <div className={classNames("block", className)}> {children} </div>;

Block.propTypes = {
    className: PropTypes.string,
}

export default Block;