import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas: any = [

    { nome: 'Zezinho da silva', cidade: 'São jose', estado: '23/12/2020', descricao: 'Ativo'},

    { nome: 'Fulaninho costa', cidade: 'Natal', estado: '23/12/2020', descricao: 'Inativo'},

    { nome: 'Sicraninho bezerra', cidade: 'Santa Catarina', estado: '23/12/2020', descricao: 'Ativo'},

    { nome: 'Beltraninho moraes', cidade: 'Parnamirim', estado: '23/12/2020', descricao: 'Ativo'},

    { nome: 'Sicraninho bezerra', cidade: 'Vilas Boas', estado: '23/12/2020', descricao: 'Inativo'},

    { nome: 'Sicraninho bezerra', cidade: 'Natal', estado: '23/12/2020', descricao: 'Ativo'},

    { nome: 'Sicraninho bezerra', cidade: 'Natal', estado: '23/12/2020', descricao: 'Ativo'},

    { nome: 'Sicraninho bezerra', cidade: 'Natal', estado: '23/12/2020', descricao: 'Ativo'},

    { nome: 'Sicraninho bezerra', cidade: 'Natal', estado: '23/12/2020', descricao: 'Inativo'}
  ]

}
