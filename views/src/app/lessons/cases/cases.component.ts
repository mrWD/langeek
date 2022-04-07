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

  baseTenses = ['presentTenseConjugations', 'pastTenseConjugations', 'futureTenseConjugations'] as const;
  baseNegativeTenses = ['presentTenseNegativeConjugations', 'pastTenseNegativeConjugations', 'futureTenseNegativeConjugations'] as const;
  baseFutureTenses = ['presentTenseQuestionConjugations', 'pastTenseQuestionConjugations', 'futureTenseQuestionConjugations'] as const;

  WORDS = ['cow', 'horse', 'distance', 'with pleasure', 'famous', 'to be happy', 'to be sad', 'pasion', 'tolerance']
  VERBS = ['to send', 'to wash', 'to wash yourself']
  TRANSLATIONS = ['Do you speak English?', 'Does anybody speaks english?']

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const words = [...this.WORDS, ...this.VERBS]

    this.translationsService.getWords(words)
    this.translationsService.getPhrases(this.TRANSLATIONS)

    this.conjugationsService.getConjugationsForPresentTense(this.VERBS)
    this.conjugationsService.getConjugationsForPastTense(this.VERBS)
    this.conjugationsService.getConjugationsForFutureTense(this.VERBS)

    this.conjugationsService.getConjugationsForNegativePresentTense(this.VERBS)
    this.conjugationsService.getConjugationsForNegativePastTense(this.VERBS)
    this.conjugationsService.getConjugationsForNegativeFutureTense(this.VERBS)

    this.conjugationsService.getConjugationsForQuestionPresentTense(this.VERBS)
    this.conjugationsService.getConjugationsForQuestionPastTense(this.VERBS)
    this.conjugationsService.getConjugationsForQuestionFutureTense(this.VERBS)
  }

}
