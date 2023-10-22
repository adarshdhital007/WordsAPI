import { Similar } from './../../models/Similar.model';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css'],
})
export class SimilarComponent {
  word: string = '';
  similars: Similar[] = [];

  selectedWord: string = '';

  constructor(private apiService: ApiService) {}

  fetchSimilar() {
    this.apiService.getSimilar(this.word).subscribe((data: Similar[]) => {
      this.similars = data;
    });
  }

  handleWordClick(selected: string) {
    this.selectedWord = selected;
    this.word = selected;
    this.fetchSimilar();
  }
  //Later for showing score
  // formatSynonym(similar: Similar): string {
  //   if (similar.score !== undefined) {
  //     return `${similar.word} (Score: ${similar.score})`;
  //   } else {
  //     return similar.word;
  //   }
  // }
}
