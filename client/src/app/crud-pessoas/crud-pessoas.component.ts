import { Component, OnInit } from '@angular/core';
import { PessoasService } from 'src/app/pessoas.service';

@Component({
  selector: 'app-crud-pessoas',
  templateUrl: './crud-pessoas.component.html',
  styleUrls: ['./crud-pessoas.component.css']
})
export class CrudPessoasComponent implements OnInit {

  lista = [];

  nome = "nova pessoa";
  fone = "999";

  constructor(public pessoasService: PessoasService) {

  }

  ngOnInit() {

    setTimeout(() => {
      this.nome = "novo nome";
      this.fone = "99";
    }, 2000);

    this.reload();
  }

  reload() {
    this.pessoasService.consulta().then(
      pessoas => {
        this.lista = pessoas;
      }
    );
  }

  inserir() {
    this.pessoasService.inserir(this.nome, this.fone).then(() => {
      this.nome = "";
      this.fone = "";
      this.reload();
    });
  }

  delete(id: string) {
    this.pessoasService.delete(id).then(() => {
      this.reload();
    });
  }

  alterar(id: string, nome: string, fone: string) {
    this.pessoasService.alterar(id, nome, fone).then(() => {
      this.reload();
    });
  }

}
