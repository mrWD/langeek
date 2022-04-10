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

  form = new FormGroup({
    link: new FormControl(''),
    name: new FormControl(''),
  })

  constructor(
    public dialogRef: MatDialogRef<WordListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    localStorage.setItem('link', this.form.value.link)
    localStorage.setItem('name', this.form.value.name)

    const { data } = await axios.request({
      method: 'GET',
      url: 'http://localhost:3000/guest-list',
      params: {
        spreadsheetId: this.form.value.link,
        name: this.form.value.name,
      }
    })

    console.log(data)

    if (data) {
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
