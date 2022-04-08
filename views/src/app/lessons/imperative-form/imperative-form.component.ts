import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-imperative-form',
  templateUrl: './imperative-form.component.html',
  styleUrls: ['./imperative-form.component.sass']
})
export class ImperativeFormComponent implements OnInit {

  baseTenses = ['presentTenseConjugations', 'pastTenseConjugations', 'futureTenseConjugations'] as const;
  baseNegativeTenses = ['presentTenseNegativeConjugations', 'pastTenseNegativeConjugations', 'futureTenseNegativeConjugations'] as const;
  baseFutureTenses = ['presentTenseQuestionConjugations', 'pastTenseQuestionConjugations', 'futureTenseQuestionConjugations'] as const;

  QUESTIONS = ['What is your name?', 'How old are you?', 'Where do you work', 'What is your profession', 'What do you like to do?', 'Where do you live', 'When is your birthday?', 'Tell about your family']
  VERBS = [
    'must',
    'to buy',
    'to sell',
    'to cost',
    'to get',
    'to show',
    'to bring',
  ]
  WORDS = [
    'rich',
    'pour',
    'desision',
    'to speak fast',
    'fast',
    'there is neither cat, nor house',
    'shop',
    'supermarket',
  ]
  TRANSLATIONS = [
    'I must do something',
    'you sold the old house and now you aree rich',
    'how much is it',
    'I must buy clothes for me and my wife',
  ]
  IMPERATIVE = [
    'give me',
    'give me (plural)',
    'give us',
    'show me',
    'show me (plural)',
    'bring to me',
    'bring to me (plural)',
    'tell me',
    'tell me (plural)',
    'make for me',
    'make for me (plural)',
  ]

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.translationsService.getWords([...this.WORDS, ...this.VERBS])
    this.translationsService.getQuestions(this.QUESTIONS)
    this.translationsService.getPhrases([...this.TRANSLATIONS, ...this.IMPERATIVE])

    this.conjugationsService.getAllConjugations(this.VERBS)
  }

}
