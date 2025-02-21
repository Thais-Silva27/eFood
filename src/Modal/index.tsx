export class Itens {
  imagem: string
  nome: string
  descricao: string
  porcao: string
  preco: number

  constructor(
    imagem: string,
    nome: string,
    descricao: string,
    porcao: string,
    preco: number
  ) {
    this.imagem = imagem
    this.nome = nome
    this.descricao = descricao
    this.porcao = porcao
    this.preco = preco
  }
}
