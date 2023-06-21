import { screen, fireEvent } from '@testing-library/react'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente produto', () => {
  const jogo = {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows'],
    preco: 150.9,
    precoAntigo: 99,
    titulo: `elden ring`
  }

  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('elden ring')).toBeInTheDocument()
  })

  test('Deve adicionar um item corretamente', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionar')
    fireEvent.click(botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
