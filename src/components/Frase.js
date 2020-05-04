import React from 'react'
import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
    padding: 1.5rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    @media (min-width: 1000px) {
        margin-top: 15rem;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        &::before {
            content: open-quote;
            font-size: 6rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;


const Frase = ({ frase }) => {


    if (Object.keys(frase).length === 0) return null
    return (
        <ContenedorFrase>

            <h1>{frase.quote}</h1>
            <p>-{frase.author}</p>

        </ContenedorFrase>
    )

}

export default Frase;