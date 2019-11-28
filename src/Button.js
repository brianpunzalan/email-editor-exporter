import styled from 'styled-components'

const Button = styled.button`
    padding: 15px;
    background-color: rgb(41, 48, 57);
    color: rgb(222, 223, 225);
    border-radius: 5px;
    border: 1px solid rgb(59, 62, 67);
    font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;
    font-size: 1em;
    cursor: pointer;
    &:hover {
        box-shadow: rgba(255, 255, 255, 0.15) 0px 6px 10px;
        border: 1px solid rgb(119,119,119);
    } 
    &:disabled {
        background-color: rgb(59,62,67);
        color: rgb(14, 19, 24);
        cursor: not-allowed;
    }
`

export default Button