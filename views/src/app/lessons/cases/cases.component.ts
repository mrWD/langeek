import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.sass']
})
export class CasesComponent implements OnInit {
  WORDS = ['cow', 'horse', 'distance', 'with pleasure', 'famous', 'to be happy', 'to be sad', 'pasion', 'tolerance']
  VERBS = ['to send', 'to wash', 'to wash yourself']
  TRANSLATIONS = ['Do you speak English?', 'Does anybody speaks english?']

  title: string = ''
  description: string = ''

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const words = [...this.WORDS, ...this.VERBS]

    this.translationsService.getWords(words)
    this.translationsService.getPhrases(this.TRANSLATIONS)
  }

}
