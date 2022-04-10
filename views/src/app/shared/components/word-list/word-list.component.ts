import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  originLanguage = 'english'
  language = 'polish'

  form = new FormGroup({
    link: new FormControl(''),
    name: new FormControl(''),
  })

  wordList: Array<Record<string, string>> = []

  constructor(
    public dialogRef: MatDialogRef<WordListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.wordList = this.data.wordList;
  }

  ngOnInit(): void {
  }

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

      this.data.onRecieveWordList({
        wordList: data.wordList,
        languages: data.languages,
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
