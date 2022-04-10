import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { BaseConjugationsComponent } from './lessons/base-conjugations/base-conjugations.component';
import { BodyPartsComponent } from './lessons/body-parts/body-parts.component';
import { CasesComponent } from './lessons/cases/cases.component';
import { DirectionsComponent } from './lessons/directions/directions.component';
import { FamilyComponent } from './lessons/family/family.component';
import { FoodComponent } from './lessons/food/food.component';
import { FutureTensAndQuestionsComponent } from './lessons/future-tens-and-questions/future-tens-and-questions.component';
import { ImperativeFormComponent } from './lessons/imperative-form/imperative-form.component';
import { MoveVerbsPastTenseComponent } from './lessons/move-verbs-past-tense/move-verbs-past-tense.component';
import { NumbersComponent } from './lessons/numbers/numbers.component';
import { OrdinalNumbersComponent } from './lessons/ordinal-numbers/ordinal-numbers.component';
import { PastEventsAndAdjectivesComponent } from './lessons/past-events-and-adjectives/past-events-and-adjectives.component';
import { PossessivePronounsComponent } from './lessons/possessive-pronouns/possessive-pronouns.component';
import { ProfessionComponent } from './lessons/profession/profession.component';
import { PronounDeclensionComponent } from './lessons/pronoun-declension/pronoun-declension.component';
import { TellAboutYourselfComponent } from './lessons/tell-about-yourself/tell-about-yourself.component';
import { OrderWordLettersComponent } from './learn-words/order-word-letters/order-word-letters.component';
import { MatchTranslationsComponent } from './learn-words/match-translations/match-translations.component';
import { AutoplayComponent } from './learn-words/autoplay/autoplay.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'lesson-1', component: BaseConjugationsComponent },
  { path: 'lesson-2', component: FutureTensAndQuestionsComponent },
  { path: 'lesson-3', component: ProfessionComponent },
  { path: 'lesson-4', component: TellAboutYourselfComponent },
  { path: 'lesson-5', component: MoveVerbsPastTenseComponent },
  { path: 'lesson-6', component: PronounDeclensionComponent },
  { path: 'lesson-7', component: PossessivePronounsComponent },
  { path: 'lesson-8', component: FamilyComponent },
  { path: 'lesson-9', component: FoodComponent },
  { path: 'lesson-10', component: NumbersComponent },
  { path: 'lesson-11', component: ImperativeFormComponent },
  { path: 'lesson-12', component: PastEventsAndAdjectivesComponent },
  { path: 'lesson-13', component: CasesComponent },
  { path: 'lesson-14', component: BodyPartsComponent },
  { path: 'lesson-15', component: OrdinalNumbersComponent },
  { path: 'lesson-16', component: DirectionsComponent },
  { path: 'order-letters', component: OrderWordLettersComponent },
  { path: 'match-translations', component: MatchTranslationsComponent },
  { path: 'choose-translation', component: OrderWordLettersComponent },
  { path: 'autoplay', component: AutoplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
