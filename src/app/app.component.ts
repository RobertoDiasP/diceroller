import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/dices', icon: 'home' },
    //{ title: 'Battle', url: '/battle', icon: 'skull' },
    { title: 'Dieta', url: '/calorias', icon: 'fast-food' },
    { title: 'Protocolo', url: '/protocolo', icon: 'id-card' },
    { title: 'Histórico', url: '/historico', icon: 'receipt' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = [''];
  constructor() {}
}
