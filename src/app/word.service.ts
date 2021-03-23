import { Injectable } from '@angular/core';
import { IWord } from './wordinterface';

@Injectable({
  providedIn: 'root'
})


export class WordService {

  constructor() { }

  words: IWord[] = [];

  /**
   * Add word and generates a new ID
   */
  public addWord(german: string, english: string): void {
    let newId = 0;
    if (this.words.length) {
      newId = Math.max(...this.words.map(w => w.id)) + 1;
    }

    this.words.push({ id: newId, german: german, english: english, edit: false });
    console.log('add new word id: ' + newId + ' ' + german + ' ' + english);
  }

  /**
   * Get word by given ID
   */
  public getWordById(id: number) {

    console.log('Service: getWordbyID' + id);
    const index = this.words.findIndex(t => t.id === id);
    if (index >= 0) {
      return this.words[index];
    }

    return null;
  }

  /**
   * Edit a word by given ID
   */
  public editWordById(id: number, german: string, english: string): void {
    console.log('Service: editWordbyId Values: ' + id + ' ' + german + ' ' + english);
    const index = this.words.findIndex(t => t.id === id);
    if (index >= 0) {
      this.words[index].german = german;
      this.words[index].english = english;
    }
    console.log(german, english);
  }

  public deleteWordById(id: number): void {
    const index = this.words.findIndex(t => t.id === id);
    if (index >= 0) {
      this.words.splice(index, 1);
      console.log('Service: delete word with id: ' + id);
    }
  }


  getWords() {
    return this.words;
  }

  clearWords() {
    this.words = [];
    return this.words;
  }

  getRandomWords() {
    let randomOrder = [];
    randomOrder = this.words;
    let currentIndex = randomOrder.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = randomOrder[currentIndex];
      randomOrder[currentIndex] = randomOrder[randomIndex];
      randomOrder[randomIndex] = temporaryValue;
    }

    return randomOrder;
  }

  verifyWord(word, wordToVerify) {
    console.log('Word recieved: '
    + ' Deutsch: ' + word.german
    + ' Englisch: ' + word.english
    + ' WordToVerify: ' );

    // const wordToVerify = this.getWordById(word.id);
    // console.log('Service: VerifyWord: Word found verify ID: '
    //  + wordToVerify.id + ' Deutsch '
    //  + wordToVerify.german
    //  + ' Englisch: ' + wordToVerify.english);
  }

}

