import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heropage',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './heropage.component.html',
  styleUrl: './heropage.component.css'
})
export class HeropageComponent {
  email: string = "";
  password: string = "";

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin123') {
      alert('Login successful');
      window.location.href = '/dashboard';
    } else {
      alert('Invalid email or password');
    }
  }

}
