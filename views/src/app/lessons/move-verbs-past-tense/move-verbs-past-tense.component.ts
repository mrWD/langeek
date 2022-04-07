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
  FIRST_VERB = ['to go']
  VERBS = ['to come', 'to enter', 'to quit', 'to born', 'to die', 'to leave']

  NEW_VERBS = ['to fall', 'to drink', 'to stay', 'to sit', 'to walk', 'to run']

  WORDS = ['welcome', 'excuse me', 'of course', 'for', 'also', 'yesterday', 'today', 'tomorrow', 'now']
  QUESTIONS = ['What did you do yesterday evening', 'What will you do today evening']

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.translationsService.getWords([...this.FIRST_VERB, ...this.WORDS, ...this.VERBS, ...this.NEW_VERBS])

    this.conjugationsService.getConjugationsForPastTense([...this.FIRST_VERB, ...this.VERBS])
    this.conjugationsService.getConjugationsForPresentTense(this.NEW_VERBS)
    this.translationsService.getQuestions(this.QUESTIONS)
  }

}
