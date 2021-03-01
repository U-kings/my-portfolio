import styled from 'styled-components';

export const ContactContent = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ContactInfo = styled.div`
    flex: 1;
`;

export const ContactInfoBox = styled.div`

`;

export const Box = styled.div`
    color: #fff;
`;

export const ContactIcon = styled.div`

`;

export const ContactText = styled.div`

`;

export const FormBox = styled.div`
    width: 60%;
    flex: 1;
    

    &.input-text{
        margin-bottom: 20px;
        padding: 15px;
        font-size: 16px;
        border: none;
        outline: none;
        background: #222;
        color: #fff;
        resize: none;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`;

export const InputField = styled.input`
    margin-bottom: 20px;
    padding: 15px;
    font-size: 16px;
    border: none;
    outline: none;
    background: #222;
    color: #fff;
    resize: none;

    &.btn{
        max-width: 100px;
        background: #2196f3;
        cursor: pointer;
        padding: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`;

export const InputTextAreaField = styled.textarea`
    margin-bottom: 20px;
    padding: 15px;
    font-size: 16px;
    border: none;
    outline: none;
    background: #222;
    color: #fff;
    resize: none;
    min-height: 150px;
`;
