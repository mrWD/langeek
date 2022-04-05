import { Component, OnInit, Input } from '@angular/core';

import { PlayerService } from '../../services/player.service';
import { SettingsFormService } from '../../services/settings-form.service';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.sass']
})
export class PhrasesComponent implements OnInit {
  @Input()
  searchedPhrases!: any[]

  @Input()
  phraseList!: any[]

  language: string
  originLanguage: string

  constructor(private settingsService: SettingsFormService, private playerService: PlayerService) {
    this.language = this.settingsService.getForm().language
    this.originLanguage = this.settingsService.getForm().originLanguage
  }

  findWord(list: any[], searchPhrase: string, language: string) {
    return list
      .find((phrase) => phrase.id.trim() === searchPhrase)
      ?.[language]
      || ''
  }

  onPlay(phraseList: any[], searchPhraseList: string[]) {
    const text = searchPhraseList
      .reduce((acc, phrase) => (`${acc}.\n\n${this.findWord(phraseList, phrase, this.language)}`), '')
      .replace(' / ', '\n\n')

    this.playerService.play(text)
  }

  ngOnInit(): void {
  }

}
