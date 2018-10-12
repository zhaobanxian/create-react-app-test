import React from 'react';
import Header from '../common/backhead';
import {Carousel,ListView} from 'antd-mobile'

export default class SliderTest extends React.Component{
    constructor(props){
        super(props)
    }
    piclist=['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
    render(){
        return <div>
            <Header></Header>
            <Carousel dots="false" autoplayInterval="2000" infinite="true" autoplay="true" style={{marginTop:'0px'}}>
            {this.piclist.map((item,index)=><img key={index} src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}></img>)}
            </Carousel>
            <ListView dataSource={this.piclist}>
            {this.piclist.map((item,index)=><img key={index} src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}></img>)}
            </ListView>
        </div>
    }
}