import { Injectable } from '@angular/core';

import { SettingsFormService } from './settings-form.service';

const mapLanguageToCode: Record<string, string> = {
  english: 'en-EN',
  german: 'de-DE',
  russian: 'ru-RU',
  polish: 'pl-PL',
  italian: 'it-IT',
  french: 'fr-FR',
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private settingsService: SettingsFormService) { }

  play(text: string) {
    const msg = new SpeechSynthesisUtterance(text)
    
    msg.lang = mapLanguageToCode[this.settingsService.getForm().language]
    msg.rate = this.settingsService.getForm().speed

    const voice = window.speechSynthesis
      .getVoices().find((v) => v.name === this.settingsService.getForm().voice && v.lang === msg.lang)

    if (voice) {
      msg.voice = voice
    }

    window.speechSynthesis.speak(msg)
  }
}
