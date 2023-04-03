import { Component, OnInit } from '@angular/core';
import { FactsService } from '../shared/services/facts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fact!: string;
  imagemUrl!: string;

  constructor(private factsService: FactsService) {}
  ngOnInit() {
    this.factsService.getRandomFact().subscribe((fact) => {
      this.fact = fact.text;
    });
  }
  imagem() {
    this.imagemUrl = 'https://cataas.com/cat';
  }
  gif() {
    this.imagemUrl = 'https://cataas.com/cat/gif';
  }
}
