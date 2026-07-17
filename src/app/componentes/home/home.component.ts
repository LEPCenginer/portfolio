import { Component, OnInit } from '@angular/core';
import { Esteban } from '../../models/misDatos/MisDatos';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent implements OnInit {
  public title: string = 'PORTAFOLIO PROFESIONAL';
  public sigueme: string = 'Contáctame';
  public esteban;
  public columna: number = 1;

  constructor() {
    this.esteban = Esteban;
    this.setColumna();

    window.addEventListener('resize', () => {
      this.setColumna();
    });
  }

  ngOnInit(): void {}

  miGithub() {
    window.open('https://github.com/', '_blank');
  }

  miCorreo() {
    window.open('mailto:' + this.esteban.correo, '_blank');
  }

  miLinkedin() {
    window.open('https://www.linkedin.com/', '_blank');
  }

  private setColumna(): void {
    this.columna = window.innerWidth < 762 ? 1 : 2;
  }
}
