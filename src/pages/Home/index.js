import React from "react";
import { Route } from "react-router-dom";

import { LoginForm} from "modules";
import SidebarContainer from 'containers/Sidebar';
import Message from "../../components/Message"; 

import "./Home.scss";

const Home = () => (
  
    <section className="home">
      <Message 
        fullname="Маша"
        avatar="https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg"
        text="Соси писос Брат"
        date="Sun Apr 21 2019 21:30:07"
        isMe={false}
        isReaded={true}
        attachments={[
            {
                filename: 'image.jpg',
                url: 'https://images.unsplash.com/photo-1591567967940-93c1efc6765c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            },
            {
                filename: 'image.jpg',
                url: ' https://images.unsplash.com/photo-1591609010524-339e8fcd3962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            },

           
        ]} />
      <Message 
        fullname="Маша"
        avatar="https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg"
        text="Сам Соси"
        date="Sun Apr 21 2019 21:30:07"
        isMe={true}
        attachments={[
            {
                filename: 'image.jpg',
                url: 'https://images.unsplash.com/photo-1588612568467-a6b245a1f4a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            }
        ]} />
      <Message 
        fullname="Маша"
        avatar="https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg"
        text="Соси писос Брат"
        date="Sun Apr 21 2019 21:30:07" />
      <SidebarContainer />
    </section>

);

export default Home;