import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos: any = [

    { tipo: 'DESPESA', pessoa: 'Zezinho da silva', descricao: 'Compra de pão', vencimento: new Date(2020, 11, 29), pagamento: new Date(2020, 12, 29),
      valor: '255.55'},

    { tipo: 'DESPESA', pessoa: 'Fulaninho costa', descricao: 'Compra de queijos', vencimento: new Date(2020, 11, 29), pagamento: new Date(2020, 12, 29),
      valor: '746'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: new Date(2020, 11, 29), pagamento: new Date(2020, 12, 29),
      valor: '321'},

    { tipo: 'DESPESA', pessoa: 'Beltraninho moraes', descricao: 'Compra de maionese', vencimento: new Date(2020, 11, 29), pagamento: new Date(2020, 12, 29),
      valor: '632'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: new Date(2020, 11, 29), pagamento: new Date(2020, 12, 29),
      valor: '321'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: new Date(2020, 11, 29), pagamento: new Date(2020, 12, 29),
      valor: '321'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: new Date(2020, 11, 29), pagamento: new Date(2020, 12, 29),
      valor: '321'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: new Date(2020, 11, 29), pagamento: new Date(2020, 12, 29),
      valor: '321'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: new Date(2020, 11, 29), pagamento: new Date(2020, 12, 29),
      valor: '321'}


]


}
