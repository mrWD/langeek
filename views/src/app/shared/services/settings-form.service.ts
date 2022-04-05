import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsFormService {

  form = {
    originLanguage: 'english',
    language: 'polish',
    voice: null,
    speed: 1,
  }

  constructor() { }

  update(form: any) {
    this.form = form
  }

  getForm() {
    return this.form
  }
}
