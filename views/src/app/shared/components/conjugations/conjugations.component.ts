import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';

import { PlayerService } from '../../services/player.service';
import { SettingsFormService } from '../../services/settings-form.service';

@Component({
  selector: 'app-conjugations',
  templateUrl: './conjugations.component.html',
  styleUrls: ['./conjugations.component.sass']
})
export class ConjugationsComponent implements OnInit {
  @Input()
  searchedVerbs!: any[]

  @Input()
  verbList!: any[]

  @Input()
  wordList!: any[]

  PRONOUNCES = ['I', 'you', 'he', 'she', 'it', 'we', 'you (plural)', 'they', 'respect']
  displayedColumns = ['originLanguage', 'language', 'conjugations', 'playConjugations']

  language: string
  originLanguage: string
  pronounces: any[] = []

  constructor(private settingsService: SettingsFormService, private playerService: PlayerService) {
    this.language = this.settingsService.getForm().language
    this.originLanguage = this.settingsService.getForm().originLanguage
  }

  async ngOnInit(): Promise<void> {
    const pronounces = await axios.request({
      method: 'GET',
      url: 'http://localhost:3000/list',
      params: {
        sheet: 'common',
        name: 'Words',
        lang: this.language,
        nativeLang: this.originLanguage,
        words: this.PRONOUNCES,
      }
    })

    this.pronounces = pronounces.data;
  }

  findWord(list: any[], searchPhrase: string, language: string) {
    return list
      .find((phrase) => phrase.id.trim() === searchPhrase)
      ?.[language]
      || ''
  }

  findConjugation(list: any[], searchWord: string, pronouns: string) {
    return list
      .find((word) => word.infinitive.trim() === searchWord)
      ?.[pronouns]
  }

  showWords(verb: string) {
    const translation = this.findWord(this.wordList, verb, this.originLanguage)
    const foreignWord = this.findWord(this.wordList, verb, this.language)
    return `${foreignWord} - ${translation}`
  }

  onPlay(list: any[], pronounsList: string[], verb: string) {
    const text = pronounsList.reduce((acc, pronouns) => {
      const pron = this.findWord(this.pronounces, pronouns, this.language)
      const infinitive = this.findWord(this.wordList, verb, this.language)
      const conjugatedVerb = this.findConjugation(list, infinitive, pronouns)

      return `${acc}.\n\n${pron}\n${conjugatedVerb}`
    }, '')

    this.playerService.play(text)
  }

}
