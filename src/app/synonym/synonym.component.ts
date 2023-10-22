import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Synonym } from 'src/models/Synonym.model';

@Component({
  selector: 'app-synonym',
  templateUrl: './synonym.component.html',
  styleUrls: ['./synonym.component.css'],
})
export class SynonymComponent {
  word: string = '';
  synonyms: Synonym[] = [];

  selectedWord: string = '';

  constructor(private apiService: ApiService) {}

  fetchSynonyms() {
    this.apiService.getSynonyms(this.word).subscribe((data: Synonym[]) => {
      this.synonyms = data;
    });
  }

  handleWordClick(selected: string) {
    this.selectedWord = selected;
    this.word = selected;
    this.fetchSynonyms();
  }
  //Later for showing score
  // formatSynonym(synonym: Synonym): string {
  //   if (synonym.score !== undefined) {
  //     return `${synonym.word} (Score: ${synonym.score})`;
  //   } else {
  //     return synonym.word;
  //   }
  // }
}
