import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SettingsFormService } from '../../shared/services/settings-form.service'
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-match-translations',
  templateUrl: './match-translations.component.html',
  styleUrls: ['./match-translations.component.sass']
})
export class MatchTranslationsComponent implements OnInit {
  WORDS = ['to study', 'to learn', 'to call', 'student', 'which', 'book']

  language = 'english'
  originLanguage = 'english'
  shuffeledTranslations: any[] = []
  matchedList: any[] = []
  firstChosenIndex: number = -1
  secondChosenIndex: number = -1

  constructor(
    private settingsService: SettingsFormService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
    private _snackBar: MatSnackBar,
  ) {
    this.language = this.settingsService.getForm().language
    this.originLanguage = this.settingsService.getForm().originLanguage
  }

  async ngOnInit(): Promise<void> {
    await this.translationsService.getWords(this.WORDS)

    this.shuffeledTranslations = [...this.translationsService.words]
      .sort(() => (0.5 - Math.random()))
  }

  matchIndexes() {
    if (this.firstChosenIndex === -1 || this.secondChosenIndex === -1) {
      return
    }

    const oldMatch = this.matchedList.indexOf(this.secondChosenIndex)

    if (oldMatch !== -1) {
      delete this.matchedList[oldMatch]
    }

    this.matchedList[this.firstChosenIndex] = this.secondChosenIndex
    this.firstChosenIndex = -1
    this.secondChosenIndex = -1

    this.checkFullFormValidation()
  }

  checkFullFormValidation() {
    const filteredMatchedList = this.matchedList.filter(val => Number.isInteger(val))

    if (filteredMatchedList.length !== this.translationsService.words.length) {
      return
    }

    const isValid = this.matchedList.every(this.checkValidation.bind(this))

    if (isValid) {
      this.openSnackBar('Success!', 'Wooohooo!')
      return
    }

    this.openSnackBar('Try again ;)', 'Ok, it\'s gonna be easy!')
  }

  checkValidation(translationIndex: number, originIndex: number) {
    const expectTranslation = this.translationsService.words[originIndex]
    const exactTranslation = this.shuffeledTranslations[translationIndex]
    return expectTranslation === exactTranslation
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      verticalPosition: 'top',
    })

    this.matchedList = []
  }

  chooseWord(index: number, propName: 'firstChosenIndex' | 'secondChosenIndex') {
    if (this[propName] === index) {
      this[propName] = -1
      return
    }

    if (this[propName] === -1) {
      this[propName] = index
    }

    this.matchIndexes()
  }

}
