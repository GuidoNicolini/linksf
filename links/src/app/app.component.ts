import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Profile } from './models/Interfaces.interface';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'links';

  profiles : Profile[] = [{id:0,name:"Seleccionar perfil",links:[]}]

  perfilSeleccionado !: number;
  constructor(private service : ProfileService){}

  ngOnInit(): void {
    this.service.getAllProfiles().subscribe(list => {
      this.profiles = list;
    })
      if(this.profiles.length != 0){
        this.perfilSeleccionado = 1;
      } 
  }

  onPerfilSeleccionado(event: any) {
    this.perfilSeleccionado = event.target.value;
    console.log('Perfil seleccionado:', this.perfilSeleccionado);
  }

  ingresar(){
    console.log("haz ingresado con: ", this.perfilSeleccionado)
  }

}
