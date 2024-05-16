import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCrudComponent } from './Components/add-crud/add-crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddCrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
