export class Carros {
  id!: number;
  nome!: string;
  image!: string; // Alterado para uma lista de URLs
  cilindrada!: string;
  ano!: string;
  marca!: string;
  valor!: string;

  constructor(id: number, nome: string, image: string, cilindrada: string, ano: string, marca: string, valor: string) {
    this.id = id;
    this.nome = nome;
    this.image = image; // Ajustado para receber uma lista
    this.cilindrada = cilindrada;
    this.ano = ano;
    this.marca = marca;
    this.valor = valor;
  }
}
