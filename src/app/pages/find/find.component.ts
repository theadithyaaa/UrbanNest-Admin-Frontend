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
  public propertyInfo: any = {};
  public updatedPropertyInfo: any = {};

  ngOnInit(): void {}

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
      this.propertyInfo = await response.json();
      this.updatedPropertyInfo = { ...this.propertyInfo }; 
      console.log(this.propertyInfo);
    } catch (error) {
      console.error("Error fetching property info:", error);
      alert("Error finding property info. Please check the ID and try again.");
    }
  }

  async updateProperty() {
    try {
      let response = await fetch('http://localhost:8080/property/update-property', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.updatedPropertyInfo)
      });

      if (!response.ok) {
        throw new Error("Error updating property.");
      }

      alert("Property updated successfully!");
      this.getPropertyInfo(); 
    } catch (error) {
      console.error("Error updating property:", error);
      alert("Error updating property. Please try again.");
    }
  }

  async deleteProperty() {
    if (!confirm("Are you sure you want to delete this property?")) {
      return;
    }

    try {
      let response = await fetch(`http://localhost:8080/property/delete-by-id/${this.id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error("Error deleting property.");
      }

      alert("Property deleted successfully!");
      this.propertyInfo = {}; 
      this.id = null; 
    } catch (error) {
      console.error("Error deleting property:", error);
      alert("Error deleting property. Please try again.");
    }
  }
}
