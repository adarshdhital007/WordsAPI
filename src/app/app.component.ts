import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Synonym } from 'src/models/Synonym.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  word: string = '';
  synonyms: Synonym[] = [];

  selectedWord: string = '';

  constructor(private apiService: ApiService) {}

  
}
