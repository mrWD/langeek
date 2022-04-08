import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../../shared/services/content-text.service'
import { TranslationsService } from '../../shared/services/translations.service';
import { ConjugationsService } from '../../shared/services/conjugations.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.sass']
})
export class FamilyComponent implements OnInit {

  baseTenses = ['presentTenseConjugations', 'pastTenseConjugations', 'futureTenseConjugations'] as const;
  baseNegativeTenses = ['presentTenseNegativeConjugations', 'pastTenseNegativeConjugations', 'futureTenseNegativeConjugations'] as const;
  baseFutureTenses = ['presentTenseQuestionConjugations', 'pastTenseQuestionConjugations', 'futureTenseQuestionConjugations'] as const;

  WORDS = ['nice to meet you', 'agree', 'when (time)', 'what time is it', 'big', 'little']
  PLACE_PRONOUNCES = ['here (location)', 'here (direction)', 'there (location)', 'there (direction)']
  VERBS = ['to want', 'can', 'to know (something)', 'to know (somebody)', 'to recognize', 'to count',]
  NUMBERS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'tvelve', 'half',]
  FAMILY = ['family', 'surname', 'name', 'father', 'mother', 'brother', 'sister', 'son', 'doghter', 'husband', 'wife', 'older', 'younger', 'cat', 'dog',]
  TRANSLATIONS = ['who wants, can', 'I am here and he is there', 'I know everything', 'I know nothing', 'do you know him', 'yes I know him', 'I do not recognize you', 'I agree with you', 'can I do it', 'can you do it for me', 'what can you do for me', 'two hours and half', 'when will you go home', 'at three',]
  QUESTIONS = ['Do you have big or small family', 'Who do you have', 'Is your brother old or young', 'What does your brother do? Does he work or study?', 'Do your parents work?']

  constructor(
    public contentTextService: ContentTextService,
    public conjugationsService: ConjugationsService,
    public translationsService: TranslationsService,
  ) { }

  async ngOnInit(): Promise<void> {
    const words = [...this.WORDS, ...this.PLACE_PRONOUNCES, ...this.VERBS, ...this.NUMBERS, ...this.FAMILY]

    this.translationsService.getWords(words)
    this.translationsService.getQuestions(this.QUESTIONS)
    this.translationsService.getPhrases(this.TRANSLATIONS)
  }

}
