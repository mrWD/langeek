import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-body-parts',
  templateUrl: './body-parts.component.html',
  styleUrls: ['./body-parts.component.sass']
})
export class BodyPartsComponent implements OnInit {

  baseTenses = ['presentTenseConjugations', 'pastTenseConjugations', 'futureTenseConjugations'] as const;
  baseNegativeTenses = ['presentTenseNegativeConjugations', 'pastTenseNegativeConjugations', 'futureTenseNegativeConjugations'] as const;
  baseFutureTenses = ['presentTenseQuestionConjugations', 'pastTenseQuestionConjugations', 'futureTenseQuestionConjugations'] as const;

  BODY = ['eyes', 'eye', 'hair', 'bold', 'beard', 'mouth', 'head', 'heart', 'hands', 'legs']
  COLORS = ['color', 'white', 'black', 'red', 'blue', 'yellow', 'green', 'brown', 'gray', 'light', 'dark']
  CLOTHES = ['dress', 'shirt', 'shoes', 'boots', 'trousers']
  QUESTIONS = ['What color is your dress?', 'What color is your shirt?', 'What color is your hair?', 'What color is your shoes?', 'What color is your trousers?', 'What color is your beard?', 'What is your favourite color?']
  TRANSLATIONS = ['beautiful like a flower']
  WORDS = ['single', 'alone', 'only', 'door', 'window', 'crime', 'lie', 'true', 'it depends on']
  VERBS = ['to close', 'to open', 'to lie']

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const words = [...this.BODY, ...this.COLORS, ...this.CLOTHES, ...this.WORDS, ...this.VERBS]

    this.translationsService.getQuestions(this.QUESTIONS)
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
