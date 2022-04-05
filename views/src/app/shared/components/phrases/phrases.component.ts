import { Component, OnInit, Input } from '@angular/core';

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
  voice: any
  speed: number

  constructor(private settingsService: SettingsFormService) {
    this.language = this.settingsService.getForm().language
    this.originLanguage = this.settingsService.getForm().originLanguage
    this.voice = this.settingsService.getForm().voice as any
    this.speed = this.settingsService.getForm().speed
  }

  findWord(list: any[], searchPhrase: string, language: string) {
    return list
      .find((phrase) => phrase.id.trim() === searchPhrase)
      ?.[language]
      || ''
  }

  ngOnInit(): void {
  }

}
