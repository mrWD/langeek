import { Injectable } from '@angular/core';

import { SettingsFormService } from './settings-form.service';

const mapLanguageToCode: Record<string, string> = {
  english: 'en-EN',
  italian: 'it-IT',
  polish: 'pl-PL',
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

    if (this.settingsService.getForm().voice) {
      msg.voice = this.settingsService.getForm().voice
    }

    window.speechSynthesis.speak(msg)
  }
}
