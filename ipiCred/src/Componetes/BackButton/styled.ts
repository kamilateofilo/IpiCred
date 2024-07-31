import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Link as RouterLink } from 'react-router-dom';


export const Conteiner = styled.div`
    margin: 1em;
`;

export const LeftButton = styled.div`
    position: absolute;
    top: 16%;

    >img {
        margin-right: 5px;
    }
`;

export const StyledLink = styled(Link)`
    color: #77787A;
    font-weight: 600;
    text-decoration: none;
    font-size: 14px;
`;

