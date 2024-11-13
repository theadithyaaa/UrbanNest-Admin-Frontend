import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../common/navbar/navbar.component";

@Component({
  selector: 'app-find',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './find.component.html',
  styleUrl: './find.component.css'
})
export class FindComponent {

}
