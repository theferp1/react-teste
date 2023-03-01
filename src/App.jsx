import React from 'react';
import Tabela from './components/Tabela';
import { Pai, Texto, MiniTexto } from './styles/styles';
import Entrada from './components/Entrada';


function App() {
  return (
    <Pai>
      <Texto color={'black'}>Simulação de fatura</Texto>
      <Entrada />
      <Texto color={'black'}>Demanda Contratada</Texto>
      <MiniTexto>Demanda Ponta: 1050kW</MiniTexto>
      <MiniTexto>Demanda Fora Ponta: 1050kW</MiniTexto>
      <Texto color={'black'}>Medição</Texto>
      <Tabela />
    </Pai>
  );
}

export default App;
