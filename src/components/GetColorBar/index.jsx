import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ColorBar from '../ColorBar';

const Wrapper = styled.div`
width:800px;
margin:0 auto;
text-align:center;
`;

const Button = styled.button`
width:80px;
height:30px;`;

const Bar = styled.div`
margin:0 auto;
margin:30px;
`;

export default class GetColorBar extends Component {
    state={
        color :[],
        show:false,
        colordata:[]
    }
    componentDidMount(){
        axios.get('http://localhost:3002/apicolor').then(
            (res)=>{
                this.setState({color:res.data})
            }).catch((error)=>{
                console.log(error);
            })
    }
    colorData = () => {
    const {color} = this.state;
    let colorList = [];
    for (let i in color) {
        if (color[i].length === 3) {
            colorList.push('rgb(' + color[i][0] + ',' + color[i][1] + ',' + color[i][2] + ')')
        }
    }
    this.setState({colordata:colorList})
    }
    showColor = ()=>{
        const {show} =this.state
        const antishow = !show
        this.setState({show:antishow})
        this.colorData();
    }
    render() {
        const {show,colordata} = this.state;
        return (
            <div>
                <Wrapper>
                    <Button onClick={this.showColor}>Colorful!</Button>
                    {show?(<Bar>
                        <ColorBar colordata={colordata}/>
                    </Bar>):''}
                </Wrapper>
            </div>
        )
    }
}
