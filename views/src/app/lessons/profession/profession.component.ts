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

  MAIN_VERBS = ['to be', 'to do', 'to go']
  QUESTION_VERBS = ['to start', 'to finish', 'to repeat', 'to tell', 'to kill']
  VERBS = ['to kill', 'to forgive', 'to forget', 'to give', 'to work']
  PROFESSIONS = ['actor', 'author', 'programmer', 'director', 'writer', 'poetry', 'science fiction']
  QUESTION_WORDS = ['who', 'where (location)', 'where (direction)', 'when', 'why', 'because', 'this is', 'how much']
  QUESTIONS = ['Where do you work', 'What is it', 'What do you do', 'Why do you do it']

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const words = [...this.MAIN_VERBS, ...this.VERBS, ...this.QUESTION_VERBS, ...this.PROFESSIONS, ...this.QUESTION_WORDS]

    this.translationsService.getWords(words)
    this.translationsService.getQuestions(this.QUESTIONS)

    this.conjugationsService.getConjugationsForPresentTense([...this.MAIN_VERBS, ...this.VERBS])
    this.conjugationsService.getConjugationsForQuestionPresentTense(this.QUESTION_VERBS)
  }

}
