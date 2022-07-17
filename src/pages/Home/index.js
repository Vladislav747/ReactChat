import React, { useEffect } from "react";
import { Messages, ChatInput, Status, Sidebar } from "../../containers";
import SidebarContainer from "../../containers/Sidebar";

import "./Home.scss";
import "../../styles/layouts/_chat.scss";

const Home = (props) => {
    const { setCurrentDialogId, user } = props;
    /**
     * Если в url идет последним id диалога то вытаскиваем и переходим к нему
     */
    useEffect(() => {
        const { pathname } = props.location;
        // const dialogId = pathname.split("/").pop();
        // setCurrentDialogId(dialogId);
    }, [props.location.pathname]);

    return (
        <section className="home">
            <div className="chat">
                <SidebarContainer />

                {user && (
                    <div className="chat__dialog">
                        <Status />
                        <Messages />
                        {/*<div className="messages-wrapper">*/}
                        {/*    <Message*/}
                        {/*        fullname="Маша"*/}
                        {/*        avatar="https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200002/facebook/ohvv7rvhaeaml0barbzn.jpg"*/}
                        {/*        text="Соси писос Брат"*/}
                        {/*        date="Sun Apr 21 2019 21:30:07"*/}
                        {/*        isMe={false}*/}
                        {/*        isReaded={true}*/}
                        {/*        attachments={[*/}
                        {/*            {*/}
                        {/*                filename: "image.jpg",*/}
                        {/*                url: "https://images.unsplash.com/photo-1591567967940-93c1efc6765c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",*/}
                        {/*            },*/}
                        {/*            {*/}
                        {/*                filename: "image.jpg",*/}
                        {/*                url: " https://images.unsplash.com/photo-1591609010524-339e8fcd3962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",*/}
                        {/*            },*/}
                        {/*        ]}*/}
                        {/*    />*/}
                        {/*    <Message*/}
                        {/*        fullname="Маша"*/}
                        {/*        avatar="https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200002/facebook/ohvv7rvhaeaml0barbzn.jpg"*/}
                        {/*        text="Сам Соси"*/}
                        {/*        date="Sun Apr 21 2019 21:30:07"*/}
                        {/*        isMe={true}*/}
                        {/*        isReaded={false}*/}
                        {/*        attachments={[*/}
                        {/*            {*/}
                        {/*                filename: "image.jpg",*/}
                        {/*                url: "https://images.unsplash.com/photo-1588612568467-a6b245a1f4a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",*/}
                        {/*            },*/}
                        {/*        ]}*/}
                        {/*    />*/}
                        {/*    <Message*/}
                        {/*        fullname="Маша"*/}
                        {/*        avatar="https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200002/facebook/ohvv7rvhaeaml0barbzn.jpg"*/}
                        {/*        text="Соси писос Брат"*/}
                        {/*        date="Sun Apr 21 2019 21:30:07"*/}
                        {/*        isReaded={true}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className="chat__dialog-input">
                            <ChatInput />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Home;
