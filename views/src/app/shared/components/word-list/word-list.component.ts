import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import axios from 'axios';

export interface DialogData {
  currentIndex: number;
  wordList: Array<Record<string, string>>;
  onPlay: (index: number) => void;
  onRecieveWordList: (prop: any) => void;
}

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.sass']
})
export class WordListComponent implements OnInit {

  @Input()
  set inputWordList(inputWordList: Array<Record<string, string>>) {
    this.wordList = inputWordList
  }

  @Input()
  currentIndex!: number

  @Input()
  isOpened!: boolean

  @Output()
  onPlay = new EventEmitter();

  @Output()
  onClose = new EventEmitter();

  @Output()
  onRecieveWordList = new EventEmitter<{ wordList: any; languages: any }>();


  originLanguage = 'english'
  language = 'polish'

  form = new FormGroup({
    link: new FormControl(localStorage.getItem('link') ?? ''),
    name: new FormControl(localStorage.getItem('name') ?? ''),
  })

  wordList: Array<Record<string, string>> = []

  constructor() {}

  ngOnInit(): void {}

  async onSubmit() {
    localStorage.setItem('link', this.form.value.link)
    localStorage.setItem('name', this.form.value.name)

    const { data } = await axios.request({
      method: 'GET',
      url: '/guest-list',
      params: {
        spreadsheetId: this.form.value.link,
        name: this.form.value.name,
      }
    })

    if (data) {
      this.wordList = data.wordList
      [this.originLanguage, this.language] = data.languages

      this.onRecieveWordList.emit({
        wordList: data.wordList,
        languages: data.languages,
      })
    }
  }

  onWordClick(index: number) {
    this.onPlay.emit(index)
  }

  close(): void {
    this.onClose.emit()
  }

}
