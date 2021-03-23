import { Component, OnInit} from '@angular/core';
import { WordService } from '../word.service';
import { Sort} from '@angular/material/sort';


@Component({
  selector: 'app-product-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})

export class WordListComponent implements OnInit {

  public wordGerman = '';
  public wordEnglish = '';
  public sortedData = [];

  constructor(public wordService: WordService ) {}

    ngOnInit(): void {
          this.sortedData = this.wordService.getWords().slice();

   }

    public addWord(): void {
    if (this.wordGerman && this.wordEnglish) {
      this.wordService.addWord(this.wordGerman, this.wordEnglish);
      this.wordGerman = '';
      this.wordEnglish = '';
      this.sortedData = this.wordService.getWords().slice();
    }
  }

  clearWords(): void {
    this.wordService.clearWords();
    this.sortedData = [];
  }

  deleteWord(id: number): void {
    this.wordService.deleteWordById(id);
     this.sortedData = this.wordService.getWords().slice();

  }


  sortData(sort: Sort) {
    const data = this.wordService.getWords().slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'german': return compare(a.german, b.german, isAsc);
        case 'english': return compare(a.english, b.english, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}




