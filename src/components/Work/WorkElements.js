import styled from 'styled-components';
import pic1 from '../../images/product-2.jpg';

export const WorkContent = styled.div`
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    flex-direction: row;
    padding: 20px 100px;
    
    @media screen and (max-width: 768px){
        padding: 20px 10px;
    }
`;
export const WorkBox = styled.div`
    width: 50%;
    padding: 20px 0;
    overflow: hidden;
    background-color: yellowgreen;
`;
export const ImageBox = styled.div`
    background-image: url(${pic1});
    /* display: flex; */
    /* flex-basis: 100%; */
    flex: 45%;
    flex-direction: column;
    /* width: 40rem; */
    height: 20rem;
    margin: 2rem 1rem;

    @media screen and (max-width: 768px){
        flex: 100%;
        width: 100%;
    }
`;