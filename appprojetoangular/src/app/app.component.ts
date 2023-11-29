import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "./services/produto.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appprojetoangular';

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService.getAll().subscribe((data) => {
      console.log(data);
    });
  }
}
