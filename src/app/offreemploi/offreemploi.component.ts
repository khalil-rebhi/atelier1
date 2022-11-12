import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/emploi';
import { SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-offreemploi',
  templateUrl: './offreemploi.component.html',
  styleUrls: ['./offreemploi.component.css']
})
export class OffreemploiComponent implements OnInit {

  listeEmploi : Emploi[]=[];
  backup : Emploi[]=[];
  result : number=0;
  search: string='Rechercher ...';
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
    
    if (!entreprise.length) {
      this.reset();
    } else {
      this.backup = this.listeEmploi;
      this.listeEmploi=this.listeEmploi.filter(e => e.entreprise.toLowerCase() == entreprise.toLowerCase());      
    }
  }
  
  reset(){    
    this.listeEmploi = this.backup;
  }


}
