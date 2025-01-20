import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { userObjective } from '../interface/listUser.interface'
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ButtonModule, 
    InputGroupModule, 
    InputGroupAddonModule, 
    FormsModule, 
    TableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = `It's our note baby`;

  name = '';

  objective = '';

  messages = [];

  listObjective: userObjective[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.name);
  }

  onAdd() {
    if (!this.name || !this.objective) {
      alert('You have blank input/s!!!')
    } else {
      this.listObjective.push({
        id: this.name,
        name: this.name,
        objective: this.objective
      })
    }
  }
}
