import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-tell-about-yourself',
  templateUrl: './tell-about-yourself.component.html',
  styleUrls: ['./tell-about-yourself.component.sass']
})
export class TellAboutYourselfComponent implements OnInit {
  QUESTIONS = ['What is your profession', 'What is your name', 'Where do you live', 'Where do you write']
  VERBS = ['to study', 'to learn', 'to call', 'to live (somewhere)', 'to sleep', 'to read']
  QUESTION_WORDS = ['which']
  WORDS_1 = ['everybody', 'somebody', 'nobody']
  WORDS_2 = ['everything', 'something', 'nothing']
  WORDS_3 = ['everywhere', 'somewhere', 'nowhere']
  WORDS_4 = ['always', 'sometimes', 'never']
  WORDS = ['student', 'book', 'woman', 'man', 'country', 'city', 'free time']

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const words = [...this.WORDS, ...this.VERBS, ...this.QUESTION_WORDS, ...this.WORDS_1, ...this.WORDS_2, ...this.WORDS_3, ...this.WORDS_4, ...this.WORDS]

    this.translationsService.getWords(words)
    this.translationsService.getQuestions(this.QUESTIONS)
  }

}
