import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import axios from 'axios';

import { PlayerService } from './../../shared/services/player.service';
import { WordListComponent } from '../../shared/components/word-list/word-list.component';

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

  currentIndex = 0

  timer = 0

  constructor(
    private ngZone: NgZone,
    public playerService: PlayerService,
    public dialog: MatDialog,
  ) { }

  async ngOnInit(): Promise<void> {
    const link = localStorage.getItem('link')
    const name = localStorage.getItem('name')

    if (!link || !name) {
      return
    }

    const { data } = await axios.request({
      method: 'GET',
      url: 'http://localhost:3000/guest-list',
      params: {
        spreadsheetId: link,
        name: name,
      }
    })

    console.log(data)

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

  showWordList() {
    const dialogRef = this.dialog.open(WordListComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      data: {
        currentIndex: this.currentIndex,
        wordList: this.wordList,
        onPlay: this.onPlayFromIndex,
        onRecieveWordList: this.updateWordList,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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

    this.playerService.play(currentText[this.originLanguage], {
      language: this.originLanguage,
      onend: () => {
        this.playerService.play(currentText[this.language], {
          language: this.language,
          onend: () => {
            this.currentText = this.wordList[this.currentIndex]
          },
        })
  
        this.goNext()
  
        if (this.currentIndex >= this.wordList.length - 1 && !this.isRepeat) {
          return
        }
  
        this.play()
      },
    })
  }

}
