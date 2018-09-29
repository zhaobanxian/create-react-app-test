import React from 'react';
import { BrowserRouter as Router, Route,Redirect,Switch   } from 'react-router-dom';
import {Index,rt as DDDIV} from "../router/index.js";
import listdata from "./routerlistdata.js";
export default class RouterRule extends React.Component {
    constructor(props){
        super(props);
        this.routerlist=[];
        listdata.forEach(element => {
            this.routerlist.push(
                <Route  key={element.id} exact component={element.component} path={element.path}></Route>
            )
        });
    }
    render() {
        return <div>
            <Router basename="/index.html#">
                <div>
                <Switch>
                    <Route exact component={Index} path="/"></Route>
                    {this.routerlist}
                    <Redirect to="/"></Redirect>
                </Switch>
                </div>
            </Router>
        </div>
    }
}