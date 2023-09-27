import { Component } from '@angular/core';import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.component.html',
  styleUrls: ['./imc-calculator.component.css']
})
export class ImcCalculatorComponent {
  peso: number | null = null;
  altura: number | null = null;
  imc: number | null = null;

  calcularIMC() {
    if (this.peso && this.altura) {
      this.imc = this.peso / (this.altura * this.altura);
    } else {
      this.imc = null;
    }
  }

  getClassificacaoIMC(imc: number | null): string {
    if (imc !== null) {
      if (imc < 18.5) {
        return 'Magreza';
      } else if (imc < 24.9) {
        return 'Peso normal';
      } else if (imc < 29.9) {
        return 'Sobrepeso';
      } else if (imc < 34.9) {
        return 'Obesidade Grau I';
      } else if (imc < 39.9) {
        return 'Obesidade Grau II';
      } else {
        return 'Obesidade Grau III';
      }
    } else {
      return 'N/A'; // Quando os campos estiverem vazios
    }
  }
}




