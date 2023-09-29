import styled from 'styled-components'

function Teste() {
  type BotaoProps = {
    principal?: boolean
    fontSize?: string
  }

  const Botao = styled.button<BotaoProps>`
    background: ${(props) => (props.principal ? 'green' : 'greenyellow')};
    color: #fff;
    font-size: ${(props) => props.fontSize || '16px'};
  `

  const BotaoCancelar = styled(Botao)`
    background: red;

    cursor: pointer;

    span {
      font-weight: bold;
      text-decoration: line-trough;
    }
  `

  return (
    <>
      <Botao fontSize="18px" principal={true}>
        Teste
      </Botao>
      <Botao principal={false}>Olá</Botao>
      <BotaoCancelar as="a" fontSize="18px">
        <span>Cancelar</span>
      </BotaoCancelar>
    </>
  )
}

export default Teste
