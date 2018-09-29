import React from 'react';
import { Link  } from 'react-router-dom';
import './index.css'
import routerlistdata from './routerlistdata.js';
class Index extends React.Component{
    getlinklist(){
        var rtlist=[];
        routerlistdata.forEach(element => {
            rtlist.push(<li key={element.id}><Link to={element.path}>{element.showname}</Link></li>)
        });
        return rtlist;
    }
    constructor(props){
        super(props)
        var st={
            'backgroundImage':'url('+process.env.PUBLIC_URL+'/img/userCenter_bg5.jpg)'
        }
        this.rt=
        <div>
        <div className="m-head" style={st}>导航栏</div>
        <ul className="set_ul">
            {this.getlinklist()}
        </ul>
        </div>
    }
    render(){
        return this.rt;
    }
}

var rt=()=>
<div>
    我是一个div
</div>


export {Index,rt};
