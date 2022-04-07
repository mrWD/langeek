import { Component, OnInit } from '@angular/core'

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-future-tens-and-questions',
  templateUrl: './future-tens-and-questions.component.html',
  styleUrls: ['./future-tens-and-questions.component.sass']
})
export class FutureTensAndQuestionsComponent implements OnInit {
  MAIN_VERB_LIST = ['to be', 'to have']

  PHRASES_1 = [
    'Good Morning',
    'Good afternoon',
    'Good evening',
    'Goodnight',
  ]

  PHRASES_2 = [
    'How are you',
    'Good',
    'Very good',
    'Thanks',
  ]

  PHRASES_3 = [
    'Please',
    'Please',
    'Goodbye',
    'Hey',
  ]

  PAST_VERB = ['to watch']
  PAST_VERB_LIST = ['to visit', 'to have breakfast']

  PAST_NEGATIVE_VERB = ['to make']
  PAST_NEGATIVE_VERB_LIST = ['to write', 'to be sorry']

  FUTURE_VERB = ['to travel']
  FUTURE_VERB_LIST = ['to live', 'to listen']

  FUTURE_NEGATIVE_VERB = ['to cook']
  FUTURE_NEGATIVE_VERB_LIST = ['to die', 'to play']

  REST_WORDS = ['Yes', 'No', 'already']

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const pastVerbs = [
      ...this.PAST_VERB,
      ...this.PAST_VERB_LIST,
    ];
    const pastNegativeVerbs = [
      ...this.PAST_NEGATIVE_VERB,
      ...this.PAST_NEGATIVE_VERB_LIST,
    ];
    const futureVerbs = [
      ...this.FUTURE_VERB,
      ...this.FUTURE_VERB_LIST,
    ];
    const futureNegativeVerbs = [
      ...this.FUTURE_NEGATIVE_VERB,
      ...this.FUTURE_NEGATIVE_VERB_LIST,
    ];
    const allVerbs = [
      ...this.MAIN_VERB_LIST,
      ...pastVerbs,
      ...pastNegativeVerbs,
      ...futureVerbs,
      ...futureNegativeVerbs,
    ]
    this.translationsService.getWords(allVerbs)
    this.translationsService.getPhrases([...this.PHRASES_1, ...this.PHRASES_2, ...this.PHRASES_3, ...this.REST_WORDS])
    this.conjugationsService.getConjugationsForPresentTense(this.MAIN_VERB_LIST)
    this.conjugationsService.getConjugationsForPastTense(pastVerbs)
    this.conjugationsService.getConjugationsForNegativePastTense(pastNegativeVerbs)
    this.conjugationsService.getConjugationsForFutureTense(futureVerbs)
    this.conjugationsService.getConjugationsForNegativeFutureTense(futureNegativeVerbs)
  }

}
