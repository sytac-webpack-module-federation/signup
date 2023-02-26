import React from 'react';
import ReactDom from 'react-dom';
import Signup from './src/Signup';

const App = () => {
    return (
        <Signup />
    );
};

ReactDom.render(<App />, document.getElementById('app'));