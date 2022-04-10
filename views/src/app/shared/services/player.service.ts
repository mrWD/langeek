import { Injectable } from '@angular/core';

import { SettingsFormService } from './settings-form.service';

interface PlayConfigParams {
  language?: string;
  onend?: Function;
  onerror?: SpeechSynthesisUtterance['onerror'];
  onmark?: SpeechSynthesisUtterance['onmark'];
  onpause?: SpeechSynthesisUtterance['onpause'];
  onresume?: SpeechSynthesisUtterance['onresume'];
  onstart?: SpeechSynthesisUtterance['onstart'];
}

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

  private player: SpeechSynthesis = window.speechSynthesis

  constructor(private settingsService: SettingsFormService) { }

  private voiceEqualsForm(lang: string) {
    return (voice: SpeechSynthesisVoice) => {
      return voice.lang === lang
    }
  }

  private generateMessage(text: string, params?: PlayConfigParams) {
    const msg = new SpeechSynthesisUtterance(text)

    msg.lang = mapLanguageToCode[params?.language ?? this.settingsService.getForm().language]
    msg.rate = this.settingsService.getForm().speed

    const voice = this.player?.getVoices().find(this.voiceEqualsForm(msg.lang))

    if (voice) {
      msg.voice = voice
    }

    msg.addEventListener('end', (e) => {
      if (params?.onend) {
        params.onend(e)
      }
    })

    return msg
  }

  play(text: string, params?: PlayConfigParams) {
    this.player?.speak(this.generateMessage(text, params))
  }

  pause() {
    this.player.cancel()
  }

  resume() {
    this.player.resume()
  }
}
