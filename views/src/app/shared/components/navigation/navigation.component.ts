import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  navigation = [
    {
      name: 'Lessons',
      linkList: [
        { link: '/lesson-1', name: 'Lesson 1' },
        { link: '/lesson-2', name: 'Lesson 2' },
        { link: '/lesson-3', name: 'Lesson 3' },
        { link: '/lesson-4', name: 'Lesson 4' },
        { link: '/lesson-5', name: 'Lesson 5' },
        { link: '/lesson-6', name: 'Lesson 6' },
        { link: '/lesson-7', name: 'Lesson 7' },
        { link: '/lesson-8', name: 'Lesson 8' },
        { link: '/lesson-9', name: 'Lesson 9' },
        { link: '/lesson-10', name: 'Lesson 10' },
        { link: '/lesson-11', name: 'Lesson 11' },
        { link: '/lesson-12', name: 'Lesson 12' },
        { link: '/lesson-13', name: 'Lesson 13' },
        { link: '/lesson-14', name: 'Lesson 14' },
        { link: '/lesson-15', name: 'Lesson 15' },
        { link: '/lesson-16', name: 'Lesson 16' },
      ],
    },
    {
      name: 'Learn Words',
      linkList: [
        { link: '/order-letters', name: 'Order letters' },
        { link: '/match-translations', name: 'Match translations' },
        { link: '/choose-translation', name: 'Choose translation' },
        { link: '/autoplay', name: 'Autoplay' },
      ],
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
 
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

}
