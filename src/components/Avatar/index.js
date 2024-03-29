import React from "react";
import PropTypes from "prop-types";

import { generateAvatarFromHash } from "../../utils/helpers";

import "./Avatar.scss";

/**
 * Компонент Аватара
 * @param user
 * @returns {JSX.Element}
 * @constructor
 */
const Avatar = ({ user }) => {
    /**
     * Есть ли у пользователя img в бд если нет то выводим цветную рандомную картинку
     */
    if (user.avatar) {
        return (
            <img
                className="avatar"
                src={user.avatar}
                alt={`Avatar ${user.fullname}`}
            />
        );
    } else {
        const { color, colorLighten } = generateAvatarFromHash(user.id);
        const firstChar = user.fullname[0].toUpperCase();
        return (
            <div
                style={{
                    background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
                }}
                className="avatar avatar--symbol"
            >
                {firstChar}
            </div>
        );
    }
};

Avatar.propTypes = {
    className: PropTypes.string,
};

export default Avatar;
