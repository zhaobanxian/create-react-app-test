import React from 'react';
import { BrowserRouter as Router, Route,Redirect,Switch   } from 'react-router-dom';
import {Index} from "../router/index.js";
import listdata from "./routerlistdata.js";
import {Bundle} from '../router/bundle.js';
import {RouteList as AntMoibleTestRoute} from "../antmobiletest/routerdata";

const SliderTest = (props) => (
    <Bundle load={() => import('../antmobiletest/slidertest.js')}>
        {(TT) => <TT {...props}></TT>}
    </Bundle >
)

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
                    {AntMoibleTestRoute}
                    <Redirect to="/"></Redirect>
                </Switch>
                </div>
            </Router>
        </div>
    }
}