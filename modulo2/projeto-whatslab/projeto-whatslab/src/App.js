import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const Mensagem = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`

const Campos = styled.div`
  display: flex;
`

const NameInput = styled.input`
  width: 100px;
`

const MessageInput = styled.input`
  flex-grow: 1;
`

const Botão = styled.button`
  background: lightgrey; 
`


class App extends React.Component {
  Render() {
    return (
      <Container>
        <Titulo>
          <p>Whatslab</p>
        </Titulo>
        <Mensagem>
          <p>
            <strong>Simone</strong>:Olá
          </p>
        </Mensagem>
        <Campos>
          <NameInput placeholder={'Usuário'} />
          <MessageInput placeholder={'Mensagem'} />
          <Botão>Enviar</Botão>
        </Campos>

      </Container>

    );
  }

}

export default App;
