import { Injectable } from '@angular/core';
import axios from 'axios'

import { SettingsFormService } from './settings-form.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  words: any[] = []
  phrases: any[] = []
  questions: any[] = []

  constructor(private settingsFormService: SettingsFormService) { }

  async getWords(verbs: string[]) {
    const words = await axios.request({
      method: 'GET',
      url: 'http://localhost:3000/list',
      params: {
        sheet: 'common',
        name: 'Words',
        lang: this.settingsFormService.getForm().language,
        nativeLang: this.settingsFormService.getForm().originLanguage,
        words: verbs,
      }
    } as const)

    this.words = words.data;
  }

  async getPhrases(verbs: string[]) {
    const phrases = await axios.request({
      method: 'GET',
      url: 'http://localhost:3000/list',
      params: {
        sheet: 'common',
        name: 'Phrases',
        lang: this.settingsFormService.getForm().language,
        nativeLang: this.settingsFormService.getForm().originLanguage,
        words: verbs,
      }
    } as const)

    this.phrases = phrases.data;
  }

  async getQuestions(verbs: string[]) {
    const questions = await axios.request({
      method: 'GET',
      url: 'http://localhost:3000/list',
      params: {
        sheet: 'common',
        name: 'Questions',
        lang: this.settingsFormService.getForm().language,
        nativeLang: this.settingsFormService.getForm().originLanguage,
        words: verbs,
      }
    } as const)

    this.questions = questions.data;
  }
}
