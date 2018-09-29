import App from "../app/App.js";
import RouterTestIndex from "../routertest/index.js";
var RouterListData=[
    {
        id:"1",
        component:App,
        showname:"官方demo",
        path:"/app",
    },
    {
        id:"2",
        component:RouterTestIndex,
        showname:"外链跳转",
        path:"/routertest",
    }
]
export default RouterListData;