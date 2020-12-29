import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos: any = [

    { tipo: 'DESPESA', pessoa: 'Zezinho da silva', descricao: 'Compra de pão', vencimento: '23/12/2020', pagamento: '233',
      valor: '255'},

    { tipo: 'DESPESA', pessoa: 'Fulaninho costa', descricao: 'Compra de queijos', vencimento: '23/12/2020', pagamento: '432',
      valor: '746'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: '23/12/2020', pagamento: '421',
      valor: '321'},

    { tipo: 'DESPESA', pessoa: 'Beltraninho moraes', descricao: 'Compra de maionese', vencimento: '23/12/2020', pagamento: '153',
      valor: '632'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: '23/12/2020', pagamento: '421',
      valor: '321'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: '23/12/2020', pagamento: '421',
      valor: '321'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: '23/12/2020', pagamento: '421',
      valor: '321'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: '23/12/2020', pagamento: '421',
      valor: '321'},

    { tipo: 'RECEITA', pessoa: 'Sicraninho bezerra', descricao: 'Compra de presunto', vencimento: '23/12/2020', pagamento: '421',
      valor: '321'}


]


}
