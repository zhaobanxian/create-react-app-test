import React from 'react';
import { Bundle } from "./bundle.js";

const App = (props) => (
    <Bundle load={() => import('../app/App.js')}>
        {(TT) => <TT {...props}></TT>}
    </Bundle>
)

const RtIndex = (props) => (
    <Bundle load={() => import('../routertest/index.js')}>
        {(TT) => <TT {...props}></TT>}
    </Bundle>
)

const AntMobileTest = (props) => (
    <Bundle load={() => import('../antmobiletest/index.js')}>
        {(TT) => <TT {...props}></TT>}
    </Bundle>
)



var RouterListData = [
    {
        component: App,
        showname: "官方demo",
        path: "/app",
    },
    {
        component: RtIndex,
        showname: "外链跳转",
        path: "/routertest",
    },
    {
        component: AntMobileTest,
        showname: "ant-mobile",
        path: "/antmobiletest"
    }
]
setid(RouterListData);

function setid(dtlist){
    dtlist.forEach(function(item,index){
        item.id=index+1;
    })
}

export default RouterListData;