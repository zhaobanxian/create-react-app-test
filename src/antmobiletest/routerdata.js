import React from 'react';
import {Bundle} from '../router/bundle.js'
import {Route,Link} from 'react-router-dom';
import Header from '../common/backhead';

const SliderTest = (props) => (
    <Bundle load={() => import('./slidertest.js')}>
        {(TT) => <TT {...props}></TT>}
    </Bundle >
)
function setid(dtlist){
    dtlist.forEach(function(item,index){
        item.id=index+1;
    })
}

const RouterData = [
    {
        showname: '轮播测试',
        description: '轮播测试',
        path: '/antmobiletest/slidertest',
        component: SliderTest
    }
]
setid(RouterData);
const RouteList=RouterData.map((item)=><Route key={'antmobiletest'+item.id} path={item.path} component={item.component}></Route>)

export default class RouteLinkList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        this.rtLinkList = RouterData.map((item) => {
            return <li key={item.id}>
                <Link to={item.path}>
                    {item.showname}
                </Link>
            </li>
        })
        return <div>
            <Header></Header>
            <ul className='set_ul'>
                {this.rtLinkList}
            </ul>
        </div>
    } 
}
export {RouterData,RouteList,RouteLinkList};