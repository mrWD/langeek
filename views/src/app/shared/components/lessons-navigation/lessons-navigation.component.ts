import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons-navigation',
  templateUrl: './lessons-navigation.component.html',
  styleUrls: ['./lessons-navigation.component.sass']
})
export class LessonsNavigationComponent implements OnInit {
  @Input()
  prevLink!: string

  @Input()
  prevLinkText: string = 'Prev Part'

  @Input()
  nextLink!: string

  @Input()
  nextLinkText: string = 'Next Part'

  constructor() { }

  ngOnInit(): void {
  }

}
