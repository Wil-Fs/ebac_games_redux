import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'

const mocks = [
  {
    id: 12,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows'],
    preco: 151240.9,
    precoAntigo: 99,
    titulo: `elden ring`
  },
  {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows'],
    preco: 150.9,
    precoAntigo: 99,
    titulo: `elden ring`
  }
]

describe('Testes para o container produtos', () => {
  test('Deve renderizar corretamente', () => {
    const { debug } = renderizaComProvider(<Produtos />)
    debug()
  })
})
