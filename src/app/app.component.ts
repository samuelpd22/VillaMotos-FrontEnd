import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/layout/navbar/navbar.component";
import { CentroComponent } from "./components/conteudo/centro/centro.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { ThevideoComponent } from "./components/thevideo/thevideo.component";
import { Nav2Component } from "./components/nav2/nav2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CentroComponent, FooterComponent, ThevideoComponent, Nav2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'villamotos';
}
