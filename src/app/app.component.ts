import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TestComponent } from './test/test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MatCardModule, TestComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
