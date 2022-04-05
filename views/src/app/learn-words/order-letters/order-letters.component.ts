import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const MARKER = ''

@Component({
  selector: 'app-order-letters',
  templateUrl: './order-letters.component.html',
  styleUrls: ['./order-letters.component.sass']
})
export class OrderLettersComponent implements OnInit {

  @Input()
  set inputList(inputList: string[]) {
    this.textList = inputList || ''
    this.arrayFromString = Array(this.textList.length).fill(MARKER);
    this.shuffledString = [...this.textList].sort(() => (0.5 - Math.random()))
  }

  @Input()
  translation: string = ''

  textList: string[] = []
  arrayFromString: string[] = []
  shuffledString: string[] = []

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  removeLetter(index: number) {
    this.shuffledString.push(this.arrayFromString[index])
    this.arrayFromString[index] = ''
  }

  addLetter(letter: string, index: number) {
    const nextIndex = this.arrayFromString.indexOf(MARKER)

    this.shuffledString.splice(index, 1)
    this.arrayFromString[nextIndex] = letter

    if (this.arrayFromString.length > nextIndex + 1) {
      return
    }

    if (this.arrayFromString === this.textList) {
      this.openSnackBar('Success!', 'Wooohooo!')
      return
    }

    this.openSnackBar('Try again ;)', 'Ok, it\'s gonna be easy!')
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      verticalPosition: 'top',
    })
  }

}
