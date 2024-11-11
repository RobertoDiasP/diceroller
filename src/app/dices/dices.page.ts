import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.page.html',
  styleUrls: ['./dices.page.scss'],
})
export class DicesPage implements OnInit {
  diceCount: number = 1;  // Inicializando com 1 dado
  diceType: number = 6;   // Inicializando com um dado d6
  results: { rolls: number[], sum: number } | null = null;
  history: any[] = [];

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
    this.loadHistory();
  }
  
  rollDice(diceType: number, diceCount: number): { rolls: number[], sum: number } {
    let rolls = [];
    let sum = 0;

    for (let i = 0; i < diceCount; i++) {
      const result = Math.floor(Math.random() * diceType) + 1;
      rolls.push(result);
      sum += result;
    }

    return { rolls, sum };
  }

  // Função chamada ao clicar no botão de rolar
  async onRollClick() {
    this.results = this.rollDice(this.diceType, this.diceCount);
    this.history.push(this.results);  // Adiciona ao histórico

    await this.storage.set('history', this.history);  // Salva o histórico no Storage
  }

  // Carregar o histórico do Storage
  async loadHistory() {
    const storedHistory = await this.storage.get('history');
    if (storedHistory) {
      this.history = storedHistory;
    }
  }

  async clearHistory() {
    await this.storage.remove('history');  // Remove o histórico do Storage
    this.history = [];  // Limpa o histórico na memória
  }

}
