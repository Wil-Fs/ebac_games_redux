import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('Deve ser renderizado corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText(`EBAC Games`)).toBeInTheDocument
  })

  test('deve renderizar com dois items no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 150.9,
              precoAntigo: 99,
              titulo: `elden ing`
            },
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 60.9,
              precoAntigo: 22,
              titulo: `Dark Souls`
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('quantidade-carrinho').innerHTML).toContain(
      '2 itens'
    )
  })
})
