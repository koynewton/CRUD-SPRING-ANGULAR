import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';


// se encarga de hacer la conexión con el back-end

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  // Hace referencia al backend
  Url = "http://localhost:8080/CrudSpring/personas";
  
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
}
