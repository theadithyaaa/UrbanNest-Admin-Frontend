import { Component } from '@angular/core';
import { NavbarComponent } from "../../common/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [NavbarComponent, RouterLink, FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']  
})
export class AddComponent {
  public property: any = {
    owner: "",
    ownercontact: "",
    location: "",
    district: "",
    price: "",
    type: ""
  };

  public districts: string[] = [
    'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
    'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
    'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
    'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla',
    'Monaragala', 'Ratnapura', 'Kegalle'
  ];

  async addProperty() {
    try {
      let response = await fetch("http://localhost:8080/property/add-property", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "owner": this.property.owner,
          "ownerContact": this.property.ownercontact,
          "location": this.property.location,
          "district": this.property.district,
          "price": this.property.price,
          "type": this.property.type
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add property');
      }

      alert('Property added successfully');
      let body = await response.json();
      alert(JSON.stringify(body));
      return body;
      
    } catch (error) {
      console.error('Error:', error);
      // alert('An error occurred while adding the property.');
    }
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
