import React, { Component } from 'react'
import styled from 'styled-components'
import Draggable from './Draggable'
import Droppable from './Droppable'

const Wrapper = styled.div`
    width: "100%",
    padding: "32px",
    display: "flex",
    justifyContent: "center"`


const Item = styled.div`
    padding: "8px",
    color: "#554", 
    backgroundColor: "white",
    borderRadius: "3px"`


const droppableStyle = {
    backgroundColor: "#555",
    width: "250px",
    height: "400px", 
    margin: "32px"
}

class DND extends Component {
    render() {
        return (
            <Wrapper>
                <Droppable id="dr1" style={{droppableStyle}}>
                    <Draggable id="item-1"><Item style={{margin:"10px"}}>Text</Item></Draggable>
                    <Draggable id="item-2"><Item style={{margin:"10px"}}>More Text</Item></Draggable>
                </Droppable>
                <Droppable id="dr2" style={{droppableStyle}}>
                </Droppable>
            </Wrapper>
        )
    }
}

export default DND