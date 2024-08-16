import styled from "styled-components";


export const SelectWrapper = styled.div`
    position: relative;
    width: 100%;
    border-radius: 50px;
    cursor: pointer;
`;

export const SelectButton = styled.button`
    width: 100%;
    padding: 10px;
    border: 1px solid #79747E;
    border-radius: 50px;
    color: #49454F;
    outline: none;
    background-color: #fff;
    font-size: 400;
    text-align: left;
    cursor: pointer;
    height: 50px;
    position: relative;
`;


export const CustomCheckboxContainer = styled.div<{ open: boolean }>`
    position: absolute;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #1D1B20;
    top: 100%;
    left: 0;
    font-weight: 400;
    font-size: 16px;
    z-index: 10;
    max-height: 200px; 
    overflow-y: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: ${props => (props.open ? 'block' : 'none')};
`;

export const CustomCheckbox = styled.label`
    display: block;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }

    input[type="checkbox"] {
        margin-right: 8px;
        cursor: pointer;
    }
`;