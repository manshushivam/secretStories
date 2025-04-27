import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material.module'; // 👈 import once

@Component({
  selector: 'app-header',
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
