import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.page.html',
  styleUrls: ['./battle.page.scss'],
})
export class BattlePage implements OnInit {
  listEnemy: any = [ 
    {id: 1, name: 'Battle 1', description: 'Description 1'},
    {id: 2, name: 'Battle 2', description: 'Description 2'},
    {id: 3, name: 'Battle 3', description: 'Description 3'},
    {id: 4, name: 'Battle 4', description: 'Description 4'},
  ]

  ListIniciative: any = [
    {id: 1, name: 'Chico', value: 10},
    {id: 2, name: 'Thales', value: 20},
    {id: 3, name: 'Ota', value: 5},
   ]
  newIniciative: any = {}

  constructor() { }

  ngOnInit() {
    this.ListIniciative.sort((a: any, b: any) => (a.value < b.value) ? 1 : -1)
  }

  removeEnemy(index: number){
    this.listEnemy.splice(index, 1)
  }

  addEnemy(){
    this.listEnemy.push({id: 5, name: 'Battle 5', description: 'Description 5'})
  }

  removeIniciative(index: number){
    this.ListIniciative.splice(index, 1)
  }

  addIniciative(){
    let value = this.ListIniciative.lenght + 1
    this.ListIniciative.push({id: value, name: this.newIniciative.name , value: this.newIniciative.value })
    this.ListIniciative.sort((a: any, b: any) => (a.value < b.value) ? 1 : -1)
  }


}
