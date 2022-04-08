import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-ordinal-numbers',
  templateUrl: './ordinal-numbers.component.html',
  styleUrls: ['./ordinal-numbers.component.sass']
})
export class OrdinalNumbersComponent implements OnInit {

  baseTenses = ['presentTenseConjugations', 'pastTenseConjugations', 'futureTenseConjugations'] as const;
  baseNegativeTenses = ['presentTenseNegativeConjugations', 'pastTenseNegativeConjugations', 'futureTenseNegativeConjugations'] as const;
  baseFutureTenses = ['presentTenseQuestionConjugations', 'pastTenseQuestionConjugations', 'futureTenseQuestionConjugations'] as const;

  ORDINAL_NUMBERS = [
    'first',
    'second',
    'third',
    'forth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'ninth',
    'tenth',
    'eleventh',
    'twelfth',
    'thirteenth',
    'fourteenth',
    'fifteenth',
    'sixteenth',
    'seventeenth',
    'eighteenth',
    'nineteenth',
    'twentieth',
    'twenty-first',
    'twenty-second',
    'twenty-third',
    'twenty-fourth',
    'twenty-fifth',
    'twenty-sixth',
    'twenty-seventh',
    'twenty-eighth',
    'twenty-ninth',
    'thirtieth',
    'fortieth',
    'fiftieth',
    'sixtieth',
    'seventieth',
    'eightieth',
    'ninetieth',
    'hundredth',
    'two hundredth',
    'thousandth',
    'one thousand five hundred',
    'hundred thousandth',
    'millionth',
  ]
  SEASONS = [
    'winter',
    'spring',
    'summer',
    'autumn',
    'in winter',
    'in spring',
    'in summer',
    'in autumn',
  ]
  PHRASES = [
    'the first time',
    'tow times',
    'the last time',
    'many times',
    'holidays',
    'I am kidding',
    'question',
    'answer',
    'to ask a question',
    'by myself (I)',
    'by myself (you)',
    'by myself (he)',
  ]
  VERBS = [
    'to ask',
    'to answer',
    'to swim',
    'to sunbathe',
    'to wait',
    'to congratulate',
    'to put',
    'to promise',
  ]
  SIDES = [
    'south',
    'north',
    'west',
    'east',
  ]
  QUESTIONS = [
    'Do you like to travel in winter?',
    'When will you have holidays?',
    'Do you prefer to travel or to stay at home when you are on holidays?',
    'When and where will you travel the next time?',
    'Will you travel?',
  ]

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const words = [...this.ORDINAL_NUMBERS, ...this.VERBS, ...this.SEASONS, ...this.SIDES]

    this.translationsService.getWords(words)
    this.translationsService.getQuestions(this.QUESTIONS)
    this.translationsService.getPhrases(this.PHRASES)

    this.conjugationsService.getAllConjugations(this.VERBS)
  }

}
