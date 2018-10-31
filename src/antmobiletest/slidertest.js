import React from 'react';
import Header from '../common/backhead';
import { Carousel, ListView } from 'antd-mobile'
import Row from './gfdemo.js';

export default class SliderTest extends React.Component {
    constructor(props) {
        super(props);
    }
    piclist = ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
    render() {
        return <div>
            <Header></Header>
            <Carousel>
                {this.piclist.map((item, index) => <img key={index} src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}></img>)}
            </Carousel>
            <Row></Row>
        </div>
    }
}