import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.sass'],
})
export class DirectionsComponent implements OnInit {
  WORDS = ['despite the', 'hapiness', 'word', 'easy', 'simple', 'hard', 'smart', 'stupid', 'once', 'someday', 'shy', 'immidiately', 'jealous', 'people', 'image', 'the same']
  VERBS = ['to cry', 'to be bored', 'to dream', 'to decide', 'to feel', 'to feel (yourself)', 'to turn', 'to imagine', 'to change']
  DIRECTIONS = ['on left', 'on the left side', 'on right', 'on the right side', 'straight', 'back', 'forward']
  QUESTIONS = ['When will you have a chance to talk in the language?', 'How will you use the language?', 'What image of the language you have now?']
  PHRASES = ['go always straight', 'how can I get to...', 'I would like to...', 'I am hungry', 'I want to drink', 'I am afraid', 'I am cold', 'I do not care']
  TRANSLATIONS = ['go straight, then turn right, then turn left and go straight']

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const words = [...this.WORDS, ...this.VERBS, ...this.DIRECTIONS]

    this.translationsService.getWords(words)
    this.translationsService.getQuestions(this.QUESTIONS)
    this.translationsService.getPhrases([...this.PHRASES, ...this.TRANSLATIONS])
  }

}
