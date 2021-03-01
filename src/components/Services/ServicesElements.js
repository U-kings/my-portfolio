import styled from 'styled-components';

export const ServicesContainter = styled.section`
    /* padding: 20px 100px; */
    background: #111;
`;

export const ServicesContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding-bottom: 5rem;
`;

export const ServicesBox = styled.div`
    padding: 40px 20px;
    background: #222;
    color: #fff;
    max-width: 340px;
    margin: 20px;
    transition: .2s ease-in-out;

    &:hover{
        background: #2196f3;
    }
`;