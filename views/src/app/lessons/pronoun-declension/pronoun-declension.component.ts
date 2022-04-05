import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service';
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';

@Component({
  selector: 'app-pronoun-declension',
  templateUrl: './pronoun-declension.component.html',
  styleUrls: ['./pronoun-declension.component.sass']
})
export class PronounDeclensionComponent implements OnInit {
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
  ]
  PREPOSITIONS = ['maybe', 'but', 'and', 'or', 'if', 'need', 'happy', 'sad']
  QUESTIONS = ['What book do you read', 'What movies do you like', 'Do you write a plot? What about?']
  TRANSLATIONS = [
    'who does not work, does not eat',
    'who searchs, always finds',
    'search a woman',
    'on a war like on a war',
    'that is life',
    'i love you',
    'I see you',
    'you love me',
    'she sees me',
    'we saw her',
    'I do not see you',
  ]

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.translationsService.getWords([...this.PRONOUNCES, ...this.PREPOSITIONS])
    this.translationsService.getQuestions(this.QUESTIONS)
    this.translationsService.getPhrases(this.TRANSLATIONS)
  }

}
