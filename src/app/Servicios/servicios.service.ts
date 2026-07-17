import { Injectable } from '@angular/core';
import { Estudio } from './estudios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private cursos: Array<Estudio>;

  constructor() {
    this.cursos = new Array();
    this.setArregloEstudio();
  }

  public setArregloEstudio(): void {
    this.cursos = [
      new Estudio('Unity', 'Desarrollo de juegos 2D y 3D, escenas, prefabs y sistemas de gameplay.', ''),
      new Estudio('C#', 'Programación orientada a objetos, eventos, corrutinas y lógica de juego.', ''),
      new Estudio('Git y GitHub', 'Control de versiones y colaboración en proyectos de desarrollo.', ''),
      new Estudio('UI/UX', 'Interfaces de usuario, HUD y experiencia del jugador.', ''),
      new Estudio('Blender básico', 'Modelado y exportación de activos simples para prototipos.', ''),
      new Estudio('Game Design', 'Diseño de mecánicas, niveles y balance de gameplay.', '')
    ];
  }

  public getArregloEstudio(): Array<Estudio> {
    return this.cursos;
  }
}
