import { Component, OnInit } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
// export class PracticeComponent implements OnInit {
export class PracticeComponent  implements OnInit {


  constructor(public wordService: WordService) { }
  
  ngOnInit(): void {
  }

  public wordEnglish = '';

  public showRandomly(random) {
    return Math.random() < random;
  }

  public verifyWord(word) {
    this.wordService.verifyWord(word, this.wordEnglish);
  }
}
