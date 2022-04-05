import { Component, OnInit } from '@angular/core';

import { ContentTextService } from '../shared/services/content-text.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(public contentTextService: ContentTextService) { }

  ngOnInit(): void {
  }

}
