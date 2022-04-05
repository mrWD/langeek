import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-possessive-pronouns',
  templateUrl: './possessive-pronouns.component.html',
  styleUrls: ['./possessive-pronouns.component.sass']
})
export class PossessivePronounsComponent implements OnInit {
  PRONOUNCES = [
    'me (who)',
    'me (whom)',
    'you (who)',
    'you (whom)',
    'him (who)',
    'him (whom)',
    'her (who)',
    'her (whom)',
    'us (who)',
    'us (whom)',
    'you (who) (plural)',
    'you (whom) (plural)',
    'them (who)',
    'them (whom)',
    'my',
    'your',
    'his',
    'her',
    'our',
    'yours (plural)',
    'their',
  ]
  PREPOSITIONS = [
    'with',
    'without',
    'for',
    'to',
    'between',
    'on',
    'in',
  ]
  VERBS = [
    'to remember',
    'to meet',
  ]
  WORDS = [
    'room',
    'home',
    'at home or to home',
    'i am at home',
    'i go home',
  ]
  QUESTIONS = ['What did you do yesterday']
  WEEK_DAYS = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ]
  TRANSLATIONS = [
    'for us',
    'with them',
    'without us',
    'we go to him',
    'give me',
    'everything is finished between me and you',
    'show me',
    'look at me',
    'listen to me',
    'between us',
    'with you',
    'to me or to you',
    'yesterday evening I went to the cinema',
    'I do not remember but I had a good time',
    'tomorrow I go to my friend and maybe we will cook soap',
    'tomorrow I will drink and eat with my friends',
  ]

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const words = [...this.WORDS, ...this.VERBS, ...this.PRONOUNCES, ...this.PREPOSITIONS, ...this.WEEK_DAYS]

    this.translationsService.getWords(words)
    this.translationsService.getQuestions(this.QUESTIONS)
    this.translationsService.getPhrases(this.TRANSLATIONS)
  }

}
