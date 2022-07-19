import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { Messages, ChatInput, Status, Sidebar } from "../../containers";
import SidebarContainer from "../../containers/Sidebar";

import { dialogsActions } from "../../redux/actions";

import "./Home.scss";
import "../../styles/layouts/_chat.scss";

const Home = (props) => {
    const { setCurrentDialogId, user, currentDialogId } = props;
    /**
     * Если в url идет последним id диалога то вытаскиваем и переходим к нему
     */
    useEffect(() => {
        const { pathname } = props.location;

        const dialogId = pathname.split("/").pop();
        console.log(dialogId, "dialogId");
        setCurrentDialogId(dialogId);
    }, [props.location.pathname]);

    return (
        <section className="home">
            <div className="chat">
                <SidebarContainer />

                {user && (
                    <div className="chat__dialog">
                        <Status />
                        <Messages />
                        {currentDialogId && (
                            <div className="chat__dialog-input">
                                <ChatInput />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default withRouter(
    connect(
        ({ user, dialogs }) => ({
            user: user.data,
            currentDialogId: dialogs.currentDialogId,
        }),
        dialogsActions
    )(Home)
);
