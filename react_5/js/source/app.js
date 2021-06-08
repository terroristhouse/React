import React from 'react';
import ReactDom from 'react-dom';
import Logo from './components/Logo'
import './components/Root'

ReactDom.render(
    <h1>
        <Logo/>Welcome to The App 什么？这是什么啊!!!
    </h1>,
    document.getElementById('app')
);
