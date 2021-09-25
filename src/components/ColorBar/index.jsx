import React from 'react'
import styled from 'styled-components'

const BarWrapper = styled.ul`
display:flex;
flex-wrap:wrap;
width:690px;
padding:0px;
margin:0px;
list-style:none;`;
const ColorItem = styled.li.attrs(props => ({
    style: {
        background: props.itemcolor,
    },
}))`
    width:10px;
    height:10px;
    padding:0px;
    list-style:none;
`;



const ColorBar = (props) => {
    const {colordata} = props;
            return(
            <BarWrapper>
                {colordata.map((item, index) => {
                        return (
                            <ColorItem key = {index} itemcolor={item}></ColorItem>
                        )
                    })}
            </BarWrapper> 
        )
}
export default ColorBar;

