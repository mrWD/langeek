import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.sass']
})
export class ProfessionComponent implements OnInit {

  TENSES = ['pastTenseConjugations', 'presentTenseConjugations', 'futureTenseConjugations'] as const

  MAIN_VERBS = ['to be', 'to do', 'to go']

  QUESTION_PAST_VERB = ['to forget']
  QUESTION_PAST_VERB_LIST = ['to work', 'to forgive']

  QUESTION_PRESENT_VERB = ['to start']
  QUESTION_PRESENT_VERB_LIST = ['to finish', 'to give']

  QUESTION_FUTURE_VERB = ['to tell']
  QUESTION_FUTURE_VERB_LIST = ['to repeat', 'to kill']

  PROFESSIONS = ['actor', 'author', 'programmer', 'director', 'writer', 'poetry', 'science fiction']

  QUESTION_WORDS = ['who', 'where (location)', 'where (direction)', 'when', 'why', 'because', 'this is', 'how much']

  QUESTIONS = ['Where do you work', 'What is it', 'What do you do', 'Why do you do it']

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const verbs = [
      ...this.MAIN_VERBS,
      ...this.QUESTION_FUTURE_VERB,
      ...this.QUESTION_FUTURE_VERB_LIST,
      ...this.QUESTION_PRESENT_VERB,
      ...this.QUESTION_PRESENT_VERB_LIST,
      ...this.QUESTION_PAST_VERB,
      ...this.QUESTION_PAST_VERB_LIST,
    ];
    const words = [...verbs, ...this.PROFESSIONS, ...this.QUESTION_WORDS]

    this.translationsService.getWords(words)

    this.conjugationsService.getConjugationsForFutureTense(this.MAIN_VERBS)
    this.conjugationsService.getConjugationsForPresentTense(this.MAIN_VERBS)
    this.conjugationsService.getConjugationsForPastTense(this.MAIN_VERBS)

    this.conjugationsService.getConjugationsForQuestionFutureTense([...this.QUESTION_FUTURE_VERB, ...this.QUESTION_FUTURE_VERB_LIST])
    this.conjugationsService.getConjugationsForQuestionPresentTense([...this.QUESTION_PRESENT_VERB, ...this.QUESTION_PRESENT_VERB_LIST])
    this.conjugationsService.getConjugationsForQuestionPastTense([...this.QUESTION_PAST_VERB, ...this.QUESTION_PAST_VERB_LIST])

    this.translationsService.getQuestions(this.QUESTIONS)
  }

}
