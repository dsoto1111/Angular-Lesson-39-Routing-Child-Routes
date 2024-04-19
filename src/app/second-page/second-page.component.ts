import { Component } from '@angular/core';
import { SecondPageChildComponent } from './second-page-child/second-page-child.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [SecondPageChildComponent, RouterModule],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {

}
