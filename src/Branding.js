import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h1`
    color: rgb(222,223,225);
    font-family: "Open Sans","Helvetica Neue",Arial,sans-serif;
`

const Branding = ({ children }) => <StyledHeading>{ children }</StyledHeading>

export default Branding