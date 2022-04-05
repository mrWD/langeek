import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-past-events-and-adjectives',
  templateUrl: './past-events-and-adjectives.component.html',
  styleUrls: ['./past-events-and-adjectives.component.sass']
})
export class PastEventsAndAdjectivesComponent implements OnInit {
  TRANSLATIONS = [
    'I did sport yesturday evening, because I want to become strong',
    'better late than never',
    'appetite comes while you eat',
    'the best is enemy of good',
    'wine is opened, need to drink it',
  ]
  VERBS = [
    'to become',
    'to laugh',
    'to smile',
  ]
  WORDS = [
    'strong',
    'already',
    'yet',
    'beautiful',
    'the most beautiful',
    'last',
    'previous',
    'next',
    'many',
    'more',
    'little',
    'less',
    'good',
    'bad',
    'better',
    'worse',
    'friend',
    'enemy',
  ]
  PHRASES = [
    'three days ago',
    'six months ago',
    'ten years ago',
    'in three days',
    'in six months',
    'in ten years',
    'there is',
  ]
  QUESTIONS = [
    'What will you do today evening',
    'Who will cook?',
    'What will he / she cook?',
    'What did you do yesterday evening',
    'When will you leave?',
    'When will you return?',
    'Have you ever been in Paris?',
  ]

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const words = [...this.WORDS, ...this.VERBS]

    this.translationsService.getWords(words)
    this.translationsService.getQuestions(this.QUESTIONS)
    this.translationsService.getPhrases([...this.TRANSLATIONS, ...this.PHRASES])
  }

}
