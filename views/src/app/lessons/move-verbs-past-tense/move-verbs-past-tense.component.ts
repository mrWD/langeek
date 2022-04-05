import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-move-verbs-past-tense',
  templateUrl: './move-verbs-past-tense.component.html',
  styleUrls: ['./move-verbs-past-tense.component.sass']
})
export class MoveVerbsPastTenseComponent implements OnInit {
  VERBS = ['to go', 'to come', 'to enter', 'to quit', 'to born', 'to die', 'to leave', 'to fall', 'to drink', 'to stay', 'to sit', 'to walk', 'to run']
  WORDS = ['welcome', 'excuse me', 'of course', 'for', 'also', 'yesterday', 'today', 'tomorrow', 'now']
  QUESTIONS = ['What did you do yesterday evening', 'What will you do today evening']

  title: string = ''
  description: string = ''

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.conjugationsService.getConjugationsForPastTense(this.VERBS)
    this.translationsService.getWords([...this.WORDS, ...this.VERBS])
    this.translationsService.getQuestions(this.QUESTIONS)
  }

}
