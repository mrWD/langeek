import { Injectable } from '@angular/core';
import axios from 'axios'

import { SettingsFormService } from './settings-form.service';

@Injectable({
  providedIn: 'root'
})
export class ConjugationsService {

  pastTenseConjugations: any[] = []
  presentTenseConjugations: any[] = []
  futureTenseConjugations: any[] = []

  pastTenseNegativeConjugations: any[] = []
  presentTenseNegativeConjugations: any[] = []
  futureTenseNegativeConjugations: any[] = []

  pastTenseQuestionConjugations: any[] = []
  presentTenseQuestionConjugations: any[] = []
  futureTenseQuestionConjugations: any[] = []

  constructor(private settingsFormService: SettingsFormService) { }

  private generateParams(name: string, words: string[]) {
    return {
      method: 'GET',
      url: '/list',
      params: {
        name,
        words,
        sheet: this.settingsFormService.getForm().language,
        lang: this.settingsFormService.getForm().language,
        nativeLang: this.settingsFormService.getForm().originLanguage,
      }
    } as const
  }

  async getConjugationsForPastTense(verbs: string[]) {
    const { data } = await axios.request(this.generateParams('Past', verbs))
    this.pastTenseConjugations = data;
  }

  async getConjugationsForPresentTense(verbs: string[]) {
    const { data } = await axios.request(this.generateParams('Present', verbs))
    this.presentTenseConjugations = data;
  }

  async getConjugationsForFutureTense(verbs: string[]) {
    const { data } = await axios.request(this.generateParams('Future', verbs))
    this.futureTenseConjugations = data;
  }

  async getConjugationsForNegativePastTense(verbs: string[]) {
    const { data } = await axios.request(this.generateParams('PastNegative', verbs))
    this.pastTenseNegativeConjugations = data;
  }

  async getConjugationsForNegativePresentTense(verbs: string[]) {
    const { data } = await axios.request(this.generateParams('PresentNegative', verbs))
    this.presentTenseNegativeConjugations = data;
  }

  async getConjugationsForNegativeFutureTense(verbs: string[]) {
    const { data } = await axios.request(this.generateParams('FutureNegative', verbs))
    this.futureTenseNegativeConjugations = data;
  }

  async getConjugationsForQuestionPastTense(verbs: string[]) {
    const { data } = await axios.request(this.generateParams('PastQuestions', verbs))
    this.pastTenseQuestionConjugations = data;
  }

  async getConjugationsForQuestionPresentTense(verbs: string[]) {
    const { data } = await axios.request(this.generateParams('PresentQuestions', verbs))
    this.presentTenseQuestionConjugations = data;
  }

  async getConjugationsForQuestionFutureTense(verbs: string[]) {
    const { data } = await axios.request(this.generateParams('FutureQuestions', verbs))
    this.futureTenseQuestionConjugations = data;
  }
}
