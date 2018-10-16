import React from 'react';
import Header from '../common/backhead';
import { Carousel, ListView } from 'antd-mobile'
import ListItem from 'antd-mobile/lib/list/ListItem';
const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
]
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;
const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const ii = (pIndex * NUM_SECTIONS) + i;
        const sectionName = `Section ${ii}`;
        sectionIDs.push(sectionName);
        dataBlobs[sectionName] = sectionName;
        rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
            const rowName = `S${ii}, R${jj}`;
            rowIDs[ii].push(rowName);
            dataBlobs[rowName] = rowName;
        }
    }
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
}

export default class SliderTest extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            dts: new ListItem.dataSource({

            })
        })
    }
    piclist = ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
    render() {
        return <div>
            <Header></Header>
            <Carousel dots="false" autoplayInterval="2000" infinite="true" autoplay="true" style={{ marginTop: '0px' }}>
                {this.piclist.map((item, index) => <img key={index} src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}></img>)}
            </Carousel>
            <ListView dataSource={this.piclist}>
                {this.piclist.map((item, index) => <img key={index} src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}></img>)}
            </ListView>
        </div>
    }
}