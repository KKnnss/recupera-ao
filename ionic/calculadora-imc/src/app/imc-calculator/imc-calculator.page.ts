import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.page.html',
  styleUrls: ['./imc-calculator.page.scss'],
})
export class ImcCalculatorPage implements OnInit {
  peso: number;
  altura: number;
  imc: number | null = null;
  classificacao: string | null = null;

  constructor() {
    this.peso = 0;
    this.altura = 0;
  }

  ngOnInit() {
   
  }

  calcularIMC() {
    if (this.peso && this.altura) {
      this.imc = this.peso / (this.altura * this.altura);
      this.classificacao = this.getClassificacaoIMC(this.imc);
    } else {
      this.imc = null;
      this.classificacao = null;
    }
  }

  getClassificacaoIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      return 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grau 3';
    }
  }
}
