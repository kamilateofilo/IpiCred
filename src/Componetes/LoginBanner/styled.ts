import styled from "styled-components";

export const ImageContainer = styled.div`
    height: 100%;
    position: absolute;
    left: 0px;
    overflow: hidden;
    z-index: -1;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    } 

    @media (max-width: 1025px) {
      width: 100%;
      height: 100%;
      position: fixed;
    }
`