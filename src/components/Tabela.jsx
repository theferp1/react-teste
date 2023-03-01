import React from 'react';
import { Header, Element, DadTable, Line } from '../styles/Tabela';

function Tabela() {
    return(
        <DadTable>
            <Header>
                <Element>Item</Element>
                <Element>Quantidade Registrada</Element>
                <Element>Quantidade Faturada</Element>
                <Element>Tarífa</Element>
                <Element>Valor</Element>
            </Header>
            <Line>
                <Element>Demanda TUSD Fora Ponta:</Element>
                <Element>1.065,1200</Element>
                <Element>1.050,0000</Element>
                <Element>14,6500</Element>
                <Element>R$ 15.382,50</Element>
            </Line>
            <Line>
                <Element>Dado da linha 2, coluna 1</Element>
                <Element>Dado da linha 2, coluna 2</Element>
                <Element>Dado da linha 2, coluna 3</Element>
            </Line>
        </DadTable>

    );
}

export default Tabela;