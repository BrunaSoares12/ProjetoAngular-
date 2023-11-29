import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "../../../services/produto.service"; // Atualize o caminho conforme necessário
import { Produto } from "../../../models/Produto";// Atualize o caminho conforme necessário

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getAll().subscribe(
      (produtos: Produto[]) => {
        this.produtos = produtos;
      },
      (error) => {
        console.error('Erro ao obter produtos', error);
      }
    );
  }
}
