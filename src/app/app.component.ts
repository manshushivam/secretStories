import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeScreenComponent } from "./home-screen/home-screen.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secrets';
}
