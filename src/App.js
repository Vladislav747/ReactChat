import React from 'react';
import {connect} from "react-redux";
import {Route, Redirect, Switch} from "react-router-dom";

import {Button, Block} from 'components';

import {Auth, Home} from "pages";

function App() {
  return (
    <div className="wrapper">
     <Block>
      <Button 
        className="button__large"
        type="primary"
        size="large" >
          This is button
      </Button>
      </Block>
    </div>
  );
}

export default App;
