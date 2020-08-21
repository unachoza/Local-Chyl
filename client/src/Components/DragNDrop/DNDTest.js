import React, { Component } from 'react'
import DND from './DND'
import styled from 'styled-components'

const AppWrapper = styled.div`
    display: "flex",
    justifyContent: "center",
    marginTop: "100px"`


const Container = styled.div`
    `


class DNDTest extends Component {
    render() {
        return (
            <AppWrapper>
                <Container>
                    <DND/>
                </Container>
            </AppWrapper>
        )
    }
}

export default DNDTest 