import { Component } from '@angular/core';
import { NavbarComponent } from "../../common/navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public property: any = {
    owner: "",
    ownercontact: "",
    location: "",
    district: "",
    price: "",
    type: ""
  }
  async addProperty() {
    let response = await fetch("http://localhost:8080/property/add-property", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        this.property = {
          "owner": this.property.owner,
          "ownerContact": this.property.ownercontact,
          "location": this.property.location,
          "district": this.property.district,
          "price": this.property.price,
          "type": this.property.type
        }
      )
    })
    alert('Property added successfully');
    let body = await response.json()
    alert(JSON.stringify(body));
    return body;
    
  }

  clearFields() {
    this.property = {
      owner: "",
      ownercontact: "",
      location: "",
      district: "",
      price: "",
      type: ""
    };
  }
  
}



