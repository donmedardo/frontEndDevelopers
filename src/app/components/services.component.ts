import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { DevelopersServices } from '../services/developers.services';
import { Developer } from '../models/developer.model';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  //ELEMENT_DATA :  Developer[]=[];
  //displayedColumns: string[] = ['nombres_completos','tecnologias_conocidas', 'link_gitHub'];
  //data = new MatTableDataSource<Developer>(this.ELEMENT_DATA);
  respuesta: any;
  data: Developer[];
  model: Developer = new Developer();

  constructor(private ds: DevelopersServices) { }

  ngOnInit() {
    this.getDevelopers();
  }
  public getDevelopers() {
    this.ds.getDevelopers().subscribe(res => {
      this.respuesta = res;
      this.data = this.respuesta;
      console.info(res)
    })
  }

  public delete(develop: Developer) {
    this.ds.delete(develop).subscribe(res => {
      this.respuesta = res;
      this.data = this.respuesta;
      console.info(res)
    })
  }

  onSubmit(closeSession: ModalDirective) {
    closeSession.hide();
    if (this.model.id === 0) {
      this.createNewDeveloper();
    } else {
      this.updateDeveloper();
    }

  }

  createNewDeveloper() {
    this.ds.agregarDeveloper(this.model).subscribe(res => {
      this.respuesta = res;
      this.data = this.respuesta;
      this.model = new Developer();
    })
  }

  chooseDeveloper(developer: Developer, closeSession: ModalDirective) {
    this.model = developer;
    closeSession.show();
  }

  updateDeveloper() {
    this.ds.updateDeveloper(this.model).subscribe(res => {
      this.respuesta = res;
      this.data = this.respuesta;
      this.model = new Developer();
    })
  }

  showModal(closeSession: ModalDirective) {
    closeSession.show();
  }

  aceptarCerrarSession(closeSession: ModalDirective) {
    localStorage.clear();
    closeSession.hide();
  }

  cancelarCerrarSession(closeSession: ModalDirective) {
    closeSession.hide();
  }

}
