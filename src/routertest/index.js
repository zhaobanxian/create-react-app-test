import React from 'react';
import './index.css';
import BackHead from '../common/backhead.js';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var domitem = <div>
            <BackHead backurl='/index.html#/'></BackHead>
            <ul className="set_ul">
                <li><a href="https://github.com/zhaobanxian/create-react-app-test">create-react-app-test</a></li>
                <li><a href="https://github.com/zhaobanxian">github address</a></li>
            </ul> 
        </div>  

        return domitem;
    }
}


