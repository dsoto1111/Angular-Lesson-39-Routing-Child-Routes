import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-second-page-child',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './second-page-child.component.html',
  styleUrl: './second-page-child.component.css'
})
export class SecondPageChildComponent {

}
