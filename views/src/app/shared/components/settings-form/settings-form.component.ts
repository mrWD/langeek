import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { SettingsFormService } from '../../services/settings-form.service';

const mapLanguageToCode: Record<string, string> = {
  english: 'en',
  italian: 'it',
  polish: 'pl',
}

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.sass']
})
export class SettingsFormComponent implements OnInit {
  title = 'langeek';

  form = new FormGroup({
    originLanguage: new FormControl('english'),
    language: new FormControl('polish'),
    voice: new FormControl(null),
    speed: new FormControl(1),
  })

  voices: SpeechSynthesisVoice[] = []

  constructor(
    private settingsService: SettingsFormService,
    private router: Router,
  ) {
    setTimeout(() => {
      this.voices = window.speechSynthesis
        .getVoices()
        .filter(({ lang }) => lang.includes(mapLanguageToCode[this.form.value.language]))

      this.form.controls['voice'].setValue(this.voices[0].name ?? null);
    })
  }

  get voice() {
    return this.voices.find(({ name }) => name === this.form.value.voice)
  }

  onSubmit() {
    this.settingsService.update({
      originLanguage: this.form.value.originLanguage,
      language: this.form.value.language,
      voice: this.form.value.voice,
      speed: this.form.value.speed,
    })

    this.router.navigate(['/'])
  }

  ngOnInit(): void { }

}
