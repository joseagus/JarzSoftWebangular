import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent implements OnInit {

  
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  userInfo = {
    email:"",
    name:"",
    mobil:"",
    message:""
  }
  userInfoValidator = {
    email:false,
    name:false,
    mobil:false,
    message:false
  }
  variableTemporal = {}
  contactar(){    
    
    //validacion de email
    if(this.userInfo.email === ""){
      console.log("email esta vacio")
      this.userInfoValidator.email=true
    }else{
      this.userInfoValidator.email=false
    }
    //validacion de nombre
    if(this.userInfo.name === ""){
      console.log("Nombre esta vacio")
      this.userInfoValidator.name=true
    }else{
      this.userInfoValidator.name=false
    }
    //validacion de mobil
    if(this.userInfo.mobil === ""){
      console.log("Celular esta vacio")
      this.userInfoValidator.mobil=true
    }else{
      this.userInfoValidator.mobil=false
    }
    //validacion de message
    if(this.userInfo.message === ""){
      console.log("Mensaje esta vacio")
      this.userInfoValidator.message=true
    }else{
      this.userInfoValidator.message=false
    }
    if(this.userInfo.name !== "" && this.userInfo.mobil !== "" && this.userInfo.email !== "" && this.userInfo.message !== "" ){
      //puedo servir para hacer consultas a api's a BD o Consumir servicios
      localStorage.setItem('userInfo',JSON.stringify(this.userInfo))
      this.router.navigate(['/'])
    } 
    // localStorage.clear()
    this.variableTemporal=localStorage.getItem('userInfo')
    console.log('temp',this.variableTemporal)
    console.log(' esto es la informacion del usuario ',this.userInfo)
    console.log('esto es la validación de los datos',this.userInfoValidator)

  }

}
