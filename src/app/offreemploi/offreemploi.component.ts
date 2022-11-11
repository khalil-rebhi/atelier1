import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Emploi } from '../core/emploi';

@Component({
  selector: 'app-offreemploi',
  templateUrl: './offreemploi.component.html',
  styleUrls: ['./offreemploi.component.css']
})
export class OffreemploiComponent implements OnInit {

  listeEmploi : Emploi[]=[];
  result : number=0;
  search: string='search';
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[
      {reference:"8105",titre:"Emploi 1",entreprise:"Esprit",etat:true},
      {reference:"4378",titre:"Emploi 2",entreprise:"Esprit",etat:false},
      {reference:"2168",titre:"Emploi 3",entreprise:"Actia",etat:true}
    ]
  }

  bilan(){
    this.result = 0;
    this.listeEmploi.map(e => e.etat && this.result++);
  }

  postuler(id:string){
    this.listeEmploi.map(e => e.reference == id && (e.etat=!e.etat));
  }

  recherche(entreprise : string){
    this.search = entreprise;
  }


}
