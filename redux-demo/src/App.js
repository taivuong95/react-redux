import react from 'react';
import React, { Component } from 'react';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

class App extends Component {


    render() {
        return (
            <div className="App">
                <ItemContainer cake />
                <ItemContainer />
                <CakeContainer />
                <HooksCakeContainer />
                <IceCreamContainer />
                <NewCakeContainer />
                <UserContainer />
            </div>
        );
    }
}

export default App;