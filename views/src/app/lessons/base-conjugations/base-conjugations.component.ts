import { Component, OnInit } from '@angular/core'

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-base-conjugations',
  templateUrl: './base-conjugations.component.html',
  styleUrls: ['./base-conjugations.component.sass']
})
export class BaseConjugationsComponent implements OnInit {
  voice?: SpeechSynthesisVoice
  speed: number = 1

  FIRST_CONJUGATION = 'to speak'
  VERB_LIST = ['to eat', 'to sing', 'to think', 'to dance']
  NEGATIVE_VERB_LIST = ['to search', 'to find', 'to love', 'to listen', 'to go']

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const verbs = [this.FIRST_CONJUGATION, ...this.VERB_LIST, ...this.NEGATIVE_VERB_LIST]

    this.translationsService.getWords(verbs)
    this.conjugationsService.getConjugationsForPresentTense(verbs)
    this.conjugationsService.getConjugationsForNegativePresentTense(verbs)
  }

}
