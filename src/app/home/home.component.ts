import { fact } from './../shared/models/fact';
import { Component, OnInit } from '@angular/core';
import { FactsService } from '../shared/services/facts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  facts!: fact;
  imagemUrl: string = 'https://cataas.com/cat/cute/says/hello?width=300';

  constructor(private factsService: FactsService) {}
  ngOnInit() {
    this.factsService.getRandomFact().subscribe((fact) => {
      this.facts = fact;
      console.log(this.facts);
      
    });
  }
  imagem() {
    this.imagemUrl = 'https://cataas.com/cat?width=300';
  }
  gif() {
    this.imagemUrl = 'https://cataas.com/cat/gif?width=300';
  }
}
