import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.sass']
})
export class NumbersComponent implements OnInit {

  baseTenses = ['presentTenseConjugations', 'pastTenseConjugations', 'futureTenseConjugations'] as const;
  baseNegativeTenses = ['presentTenseNegativeConjugations', 'pastTenseNegativeConjugations', 'futureTenseNegativeConjugations'] as const;
  baseFutureTenses = ['presentTenseQuestionConjugations', 'pastTenseQuestionConjugations', 'futureTenseQuestionConjugations'] as const;

  NUMBERS_1 = [
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ]
  NUMBERS_2 = [
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ]
  NUMBERS_3 = [
    'hundred',
    'two hundret',
    'thousand',
    'I am twenty years old',
    'he is thirty years old',
  ]
  ADJECTIVES = [
    'high',
    'low',
    'higher than he',
    'better',
  ]
  MONTHS_1 = [
    'January',
    'February',
    'March',
  ]
  MONTHS_2 = [
    'April',
    'May',
    'June',
  ]
  MONTHS_3 = [
    'July',
    'August',
    'September',
  ]
  MONTHS_4 = [
    'October',
    'November',
    'December',
  ]
  VERBS = [
    'to take',
    'to understand',
    'to teach',
    'to learn',
  ]
  TRANSLATION = [
    'do you understand me',
    'I teach you',
    'he teachs me',
    'I will study the language today evening',
    'I go home',
    'I learn the language',
  ]
  WORDS = [
    'birthday',
    'age',
    'new',
    'again',
    'every day',
    'lately',
    'recently',
  ]
  ORDERED_NUMBERS = [
    'first July',
    'second July',
    'last day',
    'the first and the last time',
  ]
  QUESTIONS = [
    'When is your birthday?',
    'How old are you?',
    'What will you do today evening',
    'What did you eat on the breakfast today?',
  ]

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const months = [...this.MONTHS_1, ...this.MONTHS_2, ...this.MONTHS_3, ...this.MONTHS_4]
    const numbers = [...this.NUMBERS_1, ...this.NUMBERS_2, ...this.NUMBERS_3]
    const words = [...numbers, ...months, ...this.ADJECTIVES, ...this.VERBS, ...this.WORDS, ...this.ORDERED_NUMBERS]

    this.translationsService.getWords(words)
    this.translationsService.getQuestions(this.QUESTIONS)
    this.translationsService.getPhrases(this.TRANSLATION)

    this.conjugationsService.getAllConjugations(this.VERBS)
  }

}
