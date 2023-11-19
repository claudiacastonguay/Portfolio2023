import React from 'react';
import styled from 'styled-components';




const Container = styled.a`
    border: 5px solid #15C4B6;
    padding: 0px 20px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    text-align: center;
    color: #15C4B6;
    text-decoration: none;
    // max-width: 150px;
    // max-width: 210px;
    display: inline-flex;
    :hover{
        color:white;
        background-color: #15C4B6;
    }
`;

const Text = styled.h3`
    font-size: 14pt;
`;


const Button = ({text, onClick, externallink}) => {

    return <Container onClick={onClick} target='_blank' href={externallink}>
         <Text>{text}</Text>
    </Container>

}




Button.defaultProps = {
    text:"DEFAULT",
    onClick:()=>{}
}


export default Button;