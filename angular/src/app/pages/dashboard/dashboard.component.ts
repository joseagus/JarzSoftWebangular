import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  
  ngOnInit(): void {
    
  }
  User = localStorage.getItem('usuario');  
  Email = localStorage.getItem('email');   

  salir(){    
      this.router.navigate(['/'])
      
  }
}
