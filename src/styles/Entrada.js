import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: yellow;
  border: 1px solid black;
  padding: 10px;

`
export const Select = styled.select`
  padding-top: ${(props)=>props.pad};
  margin-left: ${(props)=>props.marginLeft};
  margin-right: ${(props)=>props.marginRight};
  margin-block: 20px;
`

export const Block = styled.div`
width: ${(props)=>props.width};
height: ${(props)=>props.height};
background-color: orange;
`;