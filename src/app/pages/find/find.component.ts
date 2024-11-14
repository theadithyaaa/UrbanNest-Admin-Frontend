import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../common/navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FormsModule, CommonModule],
  templateUrl: './find.component.html',
  styleUrl: './find.component.css'
})
export class FindComponent implements OnInit {
  id: any; 
  public propertyInfo: any = [];

  ngOnInit(): void {
  }

  async getPropertyInfo() {
    if (!this.id) {
      alert("Please enter a valid property ID.");
      return;
    }

    try {
      let response = await fetch(`http://localhost:8080/property/search-by-id/${this.id}`);
      if (!response.ok) {
        throw new Error("Property not found or an error occurred.");
      }
      let body = await response.json();
      this.propertyInfo = body;
      console.log(this.propertyInfo);
    } catch (error) {
      console.error("Error fetching property info:", error);
      alert("Error fetching property info. Please check the ID and try again.");
    }
  }
}
