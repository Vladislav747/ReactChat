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
        isReaded={true} />
      <Message 
        fullname="Маша"
        avatar="https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg"
        text="Сам Соси"
        date="Sun Apr 21 2019 21:30:07"
        isMe={true} />
      <Message 
        fullname="Маша"
        avatar="https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg"
        text="Соси писос Брат"
        date="Sun Apr 21 2019 21:30:07" />
      <SidebarContainer />
    </section>

);

export default Home;