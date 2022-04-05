import { Component, OnInit, Input } from '@angular/core';

import { PlayerService } from '../../services/player.service';
import { SettingsFormService } from '../../services/settings-form.service';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.sass']
})
export class TranslationsComponent implements OnInit {
  @Input()
  searchedPhrases!: any[]

  @Input()
  phraseList!: any[]

  displayedColumns = ['originLanguage', 'language', 'playTranslations']

  language: string
  originLanguage: string

  constructor(private settingsService: SettingsFormService, private playerService: PlayerService) {
    this.language = this.settingsService.getForm().language
    this.originLanguage = this.settingsService.getForm().originLanguage
  }

  ngOnInit(): void {
  }

  findPhrase(phraseList: any[], searchPhrase: string, language: string) {
    return phraseList
      .find((phrase) => phrase.id.trim() === searchPhrase)
      ?.[language]
      || ''
  }

  onPlay(phraseList: any[], searchPhraseList: string[]) {
    const text = searchPhraseList
      .reduce((acc, phrase) => (`${acc}.\n\n${this.findPhrase(phraseList, phrase, this.language)}`), '')

    this.playerService.play(text)
  }

}
