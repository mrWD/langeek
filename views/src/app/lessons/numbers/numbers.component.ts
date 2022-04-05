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
  NUMBERS = [
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'eighty',
    'ninety',
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
  MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
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
    const words = [...this.NUMBERS, ...this.ADJECTIVES, ...this.MONTHS, ...this.VERBS, ...this.WORDS, ...this.ORDERED_NUMBERS]

    this.translationsService.getWords(words)
    this.translationsService.getQuestions(this.QUESTIONS)
    this.translationsService.getPhrases(this.TRANSLATION)
  }

}
