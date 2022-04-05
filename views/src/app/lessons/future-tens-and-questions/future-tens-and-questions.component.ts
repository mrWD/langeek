import { Component, OnInit } from '@angular/core'

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

const phrases = [
  'Good Morning',
  'Good afternoon',
  'Good evening',
  'Goodnight',
  'How are you',
  'Good',
  'Very good',
  'Thanks',
  'Please',
  'Please',
  'Goodbye',
  'Hey',
  'already',
  'already saw',
  'Yes',
  'No',
  'rejoice',
  'joy',
  'afraid',
]

@Component({
  selector: 'app-future-tens-and-questions',
  templateUrl: './future-tens-and-questions.component.html',
  styleUrls: ['./future-tens-and-questions.component.sass']
})
export class FutureTensAndQuestionsComponent implements OnInit {
  VERB_LIST = ['to be', 'to have']
  PAST_VERB_LIST = ['to watch', 'to visit', 'to have breakfast', 'to make', 'to write']
  FUTURE_VERB_LIST = ['to travel', 'to live', 'to cook', 'to play', 'to be sorry']
  PHRASES = phrases

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.translationsService.getWords([...this.VERB_LIST, ...this.PAST_VERB_LIST, ...this.FUTURE_VERB_LIST])
    this.translationsService.getPhrases(this.PHRASES)
    this.conjugationsService.getConjugationsForPresentTense(this.VERB_LIST)
    this.conjugationsService.getConjugationsForPastTense(this.PAST_VERB_LIST)
    this.conjugationsService.getConjugationsForFutureTense(this.FUTURE_VERB_LIST)
  }

}
