import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: Http) { }

  consulta() {
    return this.http.get("http://localhost:3000/pessoas")
      .toPromise()
      .then((response) => response.json());
  }

  inserir(nome: string, fone: string) {
    return this.http.post("http://localhost:3000/pessoas", { nome: nome, fone: fone })
      .toPromise()
      .then((response) => { response.json() })
      .catch((error) => { console.log(error) });
  }

  delete(id: string) {
    return this.http.delete("http://localhost:3000/pessoas/" + id)
      .toPromise()
      .then((response) => { response.json() })
      .catch((error) => { console.log(error) });
  }

  alterar(id: string, nome: string, fone: string) {
    return this.http.put("http://localhost:3000/pessoas/" + id, { id: id, nome: nome, fone: fone })
      .toPromise()
      .then((response) => { response.json() })
      .catch((error) => { console.log(error) });
  }
}
