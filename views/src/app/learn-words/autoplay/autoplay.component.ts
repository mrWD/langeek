import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

import { PlayerService } from './../../shared/services/player.service';

const BOUNDS_1 = 5
const BOUNDS_2 = 30
const BOUNDS_3 = 60

const VALUE_1 = 1
const VALUE_2 = 5
const VALUE_3 = 10
const VALUE_4 = 15

@Component({
  selector: 'app-autoplay',
  templateUrl: './autoplay.component.html',
  styleUrls: ['./autoplay.component.sass']
})
export class AutoplayComponent implements OnInit {

  originLanguage = 'english'
  language = 'polish'

  wordList = []
  languages = []

  currentText: Record<string, string> = {}

  isTimerControlsVisible = false
  isShuffled = false
  isRepeat = false
  isPlaying = false
  isModalVisible = false

  currentIndex = 0

  timer = 0

  constructor(
    private ngZone: NgZone,
    public playerService: PlayerService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    const queryLink = this.route.snapshot.queryParamMap.get('link')
    const queryName = this.route.snapshot.queryParamMap.get('name')

    if (queryLink && queryName) {
      localStorage.setItem('link', queryLink)
      localStorage.setItem('name', queryName)
    }

    const link = queryLink ?? localStorage.getItem('link')
    const name = queryName ?? localStorage.getItem('name')

    if (!link || !name) {
      this.toggleWordListVisibility()
      return
    }

    const { data } = await axios.request({
      method: 'GET',
      url: '/guest-list',
      params: {
        spreadsheetId: link,
        name: name,
      }
    })

    if (data) {
      this.updateWordList({
        wordList: data.wordList,
        languages: data.languages,
      })
    }
  }

  get currentWord(): Record<string, string> {
    return this.wordList[this.currentIndex] || {}
  }

  toggleWordListVisibility() {
    this.isModalVisible = !this.isModalVisible
  }

  updateWordList({ wordList, languages }: any) {
    [this.originLanguage, this.language] = languages
    this.currentText = wordList[0]
    this.wordList = wordList
  }

  toggleRepead() {
    this.isRepeat = !this.isRepeat
  }

  toggleShuffle() {
    this.isShuffled = !this.isShuffled
  }

  toggleTimerControlsVisibility() {
    this.isTimerControlsVisible = !this.isTimerControlsVisible
  }

  decreaseTime() {
    const coef = this.timer <= BOUNDS_1 ? VALUE_1
      : this.timer <= BOUNDS_2 ? VALUE_2
      : this.timer <= BOUNDS_3 ? VALUE_3
      : VALUE_4

    this.timer = Math.max(0, this.timer - coef)
  }

  increaseTime() {
    const coef = this.timer < BOUNDS_1 ? VALUE_1
      : this.timer < BOUNDS_2 ? VALUE_2
      : this.timer < BOUNDS_3 ? VALUE_3
      : VALUE_4

    this.timer += coef
  }

  goPrev() {
    if (this.currentIndex <= 0) {
      this.currentIndex = this.wordList.length - 1
    } else {
      this.currentIndex--
    }
  }

  goNext() {
    if (this.currentIndex >= this.wordList.length - 1) {
      this.currentIndex = 0
    } else {
      this.currentIndex++
    }
  }

  onPause() {
    this.playerService.pause()
    this.isPlaying = false
  }

  onPlayFromIndex(index: number) {
    this.currentIndex = index
    this.onPlay()
  }

  onPlay() {
    this.isPlaying = true
    this.play()
  }

  play() {
    const currentText = this.wordList[this.currentIndex]

    const interval = setInterval(() => {
      this.playerService.play(currentText[this.originLanguage], {
        language: this.originLanguage,
      })

      this.playerService.play(currentText[this.language], {
        language: this.language,
      })

      this.goNext()
    })

    // setTimeout(() => {
    //   this.playerService.play(currentText[this.originLanguage], {
    //     language: this.originLanguage,
    //   })
    // }, 100)

    // setTimeout(() => {
    //   this.playerService.play(currentText[this.originLanguage], {
    //     language: this.originLanguage,
    //   })

    //   this.goNext()
    // }, 100)

    // this.playerService.play(currentText[this.originLanguage], {
    //   language: this.originLanguage,
    //   onend: () => {
    //     this.playerService.play(currentText[this.language], {
    //       language: this.language,
    //       onend: () => {
    //         this.currentText = this.wordList[this.currentIndex]
    //       },
    //     })
  
    //     this.goNext()
  
    //     if (this.currentIndex >= this.wordList.length - 1 && !this.isRepeat) {
    //       return
    //     }
  
    //     this.play()
    //   },
    // })
  }

}
