/*测试列表功能示例demo */

import { Component } from 'react';
import { ListView } from 'antd-mobile';

class ListTest extends Component {
    constructor(props) {
        super(props);
        this.datalist = props.data || [];
        this.initct();
    }
    initct() {//初始化数据
        this.sectionnum = 1;
        this.sectionrownum = this.datalist.length;
        this.sectionids = [];
        this.rowids = [];
        this.setsection();
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
        this.setState({
            surce: new ListView.DataSource({
                getRowData,
                getSectionHeaderData: getSectionData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            })
        })
    }
    setsection(pIndex = 0) {
        for (let i = 0; i < sectionnum; i++) {
            const ii = (pIndex * sectionnum) + i;
            const sectionName = `Section ${ii}`;
            sectionids.push(sectionName);
            dataBlobs[sectionName] = sectionName;
            rowids[ii] = [];

            for (let jj = 0; jj < sectionrownum; jj++) {
                const rowName = `S${ii}, R${jj}`;
                rowids[ii].push(rowName);
                dataBlobs[rowName] = rowName;
            }
        }
        sectionids = [...sectionids];
        rowids = [...rowids];
    }
    setdatasurce() {//显示
        this.setsection();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlobs, this.sectionIDs, this.rowIDs),
        });
    }
    componentDidMount() {
        this.setdatasurce();
    }
    render() {
        return <ListView dataSource={this.state.dataSource} >
        </ListView>
    }
}

export default ListTest;