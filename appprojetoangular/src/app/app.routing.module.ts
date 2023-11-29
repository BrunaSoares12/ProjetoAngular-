import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroProdutosComponent } from "./views/produto/cadastro-produtos/cadastro-produtos.component";

const routes: Routes = [
    {path:"Novo-cadastro-produto", component: CadastroProdutosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}