import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.sass']
})
export class FoodComponent implements OnInit {
  QUESTIONS = [
    'How did you spend your weekends?',
    'How did you spend the Sunday?',
  ]
  VERBS = [
    'to hit',
    'to hope',
    'to get marry',
    'to order',
    'to pay',
    'to say',
    'to contradict',
    'to have lunch',
    'to have dinner',
  ]
  WORDS = [
    'cold',
    'warm',
    'many',
    'little',
    'a little',
    'expensive',
    'cheap',
  ]
  FOOD = [
    'tea',
    'coffee',
    'fish',
    'beer',
    'meat',
    'red wine',
    'white wine',
    'water',
    'juice',
    'chicken',
    'vegetables',
    'fruits',
    'apple',
    'potato',
    'seafood',
  ]
  TRANSLATIONS = [
    'what do you say',
    'what did you say',
    'do you have lunch at home or in a restaurant today',
    'I will eat at home',
    'can I pay by card',
  ]
  QUESTIONS_2 = [
    'Do you prefer fish or meat?',
    'What do you prefer to drink?',
    'What dish did you cook?',
  ]
  FINANCES = [
    'money',
    'credit card',
    'check, please',
    'menu, please',
    'price',
  ]

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const words = [...this.WORDS, ...this.VERBS, ...this.FOOD, ...this.FINANCES]

    this.translationsService.getWords(words)
    this.translationsService.getQuestions([...this.QUESTIONS, ...this.QUESTIONS_2])
    this.translationsService.getPhrases(this.TRANSLATIONS)
  }

}
