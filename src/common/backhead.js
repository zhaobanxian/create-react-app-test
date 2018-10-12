import React from 'react';
import './backhead.css';
export default class BackHead extends React.Component {
    constructor(props) {
        super(props)
        if (props.backclick) {
            this.backHandler = props.backclick;
        }else{
            this.backHandler=this.backHandler.bind(this);
        }
        this.bgstyle={
            backgroundImage:"url("+process.env.PUBLIC_URL+"/img/back.png)"
        }
    }
    backHandler() {
        if (this.props.backurl) {
            window.location=this.props.backurl;
            //window.event.preventDefault();
        }
        else {
            window.history.back();
            //console.log("缺少参数返回")
        }
    }
    render() {
        var rt = <div className='backhead_head'>
            <span style={this.bgstyle} onClick={this.backHandler}>返回</span>
        </div>
        return rt;
    }
}