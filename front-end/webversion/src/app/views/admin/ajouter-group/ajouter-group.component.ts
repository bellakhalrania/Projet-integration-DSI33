import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthloginService } from '../../../services/authlogin.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter-group',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './ajouter-group.component.html',
  styleUrl: './ajouter-group.component.css'
})

export class AjouterGroupComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private ds:AuthloginService) { }

  
 
  add(f: any) {
    let data = f.value;
    console.log(data);
    this.ds.createGroup(data).subscribe(data => console.log(data));
  }

}






