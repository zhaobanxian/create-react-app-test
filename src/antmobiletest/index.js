import React from 'react';
//import { Route, Switch } from 'react-router-dom';
import {RouteLinkList} from './routerdata';
//import SliderTest from './slidertest.js';
import BackHead from '../common/backhead';


//const RtList = RouterData.map((item) => <Route key={item.id} path={item.path} component={item.component}></Route>);
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        {/* <Switch>
                <Route extra path={`${this.props.match.url}`} component={RouteLinkList}></Route>
                {RtList}
            </Switch> */}
    }
    render() {
        return <div>
            <RouteLinkList></RouteLinkList>
        </div>
    }
}