import { Component, OnInit } from '@angular/core';

import { SettingsFormService } from '../../shared/services/settings-form.service'
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-order-word-letters',
  templateUrl: './order-word-letters.component.html',
  styleUrls: ['./order-word-letters.component.sass']
})
export class OrderWordLettersComponent implements OnInit {
  WORDS = ['to study', 'to learn', 'to call', 'student', 'which', 'book']

  language = 'english'
  originLanguage = 'english'

  constructor(
    private settingsService: SettingsFormService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) {
    this.language = this.settingsService.getForm().language
    this.originLanguage = this.settingsService.getForm().originLanguage
  }

  async ngOnInit(): Promise<void> {
    this.translationsService.getWords(this.WORDS)
  }

}
