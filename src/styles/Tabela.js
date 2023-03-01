import styled from 'styled-components';

export const DadTable = styled.table`
 border: solid 1px black;

 width: 100%;
 height: 100%;

 @media screen and (max-width: 480px) {
  font-size: small;
}
`

export const Header = styled.tr`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    border: solid 1px black;
    align-items: center;
    background-color: #e4e4e4;

    width: 800px;
    height: 60px;

`

export const Element = styled.th`
    display: flex;
    flex-wrap: nowrap;
    color: black;
    width: 100%;
    
    cursor: pointer;
    margin-left: 5vw;
    margin-right: 5vw;
    :hover{
        background-color: red;
    }

    :focus{
        background-color: yellow;
    }
    

`

export const Line = styled.td`
    display: flex;
    flex-direction: row; 
    border: solid 1px black;

`