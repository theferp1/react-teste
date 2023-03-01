import React from 'react';
import { Container, Select, Block} from '../styles/Entrada';

function Entrada() {
    return(
        <Container>
        <Select>
          <option></option>
          <option>Jan 2023</option>
          <option>Fev 2023</option>
          <option>Mar 2023</option>
          <option>Abr 2023</option>
          <option>Mai 2023</option>
          <option>Jun 2023</option>
          <option>Jul 2023</option>
          <option>Ago 2023</option>
          <option>Set 2023</option>
          <option>Out 2023</option>
          <option>Nov 2023</option>
          <option>Dez 2023</option>
        </Select>
        <Block width={'20px'} heigth={'20px'}/>
          <p>até</p>
        <Block width={'20px'} heigth={'20px'}/>
        
        <Select op-02 pad={'px'} >
          <option></option>
          <option>Jan 2023</option>
          <option>Fev 2023</option>
          <option>Mar 2023</option>
          <option>Abr 2023</option>
          <option>Mai 2023</option>
          <option>Jun 2023</option>
          <option>Jul 2023</option>
          <option>Ago 2023</option>
          <option>Set 2023</option>
          <option>Out 2023</option>
          <option>Nov 2023</option>
          <option>Dez 2023</option>
        </Select>
      </Container>
    );
}

export default Entrada;