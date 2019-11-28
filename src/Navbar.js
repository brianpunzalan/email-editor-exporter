import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Branding from './Branding'

const Navbar = styled.nav`
    background-color: rgb(41, 48, 57);
    border-bottom: 1px solid rgb(14, 19, 24);
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    display: inline-flex;
    justify-content: space-between;
`

const Container = styled.div`
    margin: auto;
    display: inline-flex;
    justify-content: flex-end;
    width: auto;
    margin-right: 15px;

    button {
        margin-right: 10px;
    }
`

const StyledNavbar = ({ 
    onExport, 
    onSave, 
    isSaving = false, 
    isExporting = false 
}) => (
    <Navbar>
        <Branding>Email Template Editor</Branding>
        <Container>
            <Button disabled={isSaving} onClick={onSave}>Save</Button>
            <Button disabled={isExporting} onClick={onExport}>Export HTML</Button>
        </Container>
    </Navbar>
)

export default StyledNavbar