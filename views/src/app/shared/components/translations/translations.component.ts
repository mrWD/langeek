import { Component, OnInit, Input } from '@angular/core';

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

  displayedColumns = ['originLanguage', 'language']

  language: string
  originLanguage: string
  voice: any
  speed: number

  constructor(private settingsService: SettingsFormService) {
    this.language = this.settingsService.getForm().language
    this.originLanguage = this.settingsService.getForm().originLanguage
    this.voice = this.settingsService.getForm().voice as any
    this.speed = this.settingsService.getForm().speed
  }

  ngOnInit(): void {
  }

  findPhrase(phraseList: any[], searchPhrase: string, language: string) {
    return phraseList
      .find((phrase) => phrase.id.trim() === searchPhrase)
      ?.[language]
      || ''
  }

}
