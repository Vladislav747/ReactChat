import React from "react";
import { connect } from "react-redux";

import { dialogsActions } from "../redux/actions";

import { Status as StatusBase } from "../components";
/**
 * Компонент со статусом пользователя вверху
 * @param currentDialogId
 * @param user
 * @param dialogs
 * @returns {JSX.Element|null}
 * @constructor
 */
const Status = ({ currentDialogId, user, dialogs, deleteDialog }) => {
    if (!dialogs.length || !currentDialogId) {
        return null;
    }

    const currentDialogObj = dialogs.filter(
        (dialog) => dialog._id === currentDialogId
    )[0];

    let partner = {};

    if (currentDialogObj?.author._id === user._id) {
        partner = currentDialogObj?.partner;
    } else {
        partner = currentDialogObj?.author;
    }

    return (
        <StatusBase
            online={partner?.isOnline}
            fullname={partner?.fullname}
            deleteDialog={() => deleteDialog(currentDialogId)}
        />
    );
};

export default connect(
    ({ dialogs, user }) => ({
        dialogs: dialogs.items,
        currentDialogId: dialogs.currentDialogId,
        user: user.data,
    }),
    dialogsActions
)(Status);
