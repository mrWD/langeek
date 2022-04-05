import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseConjugationsComponent } from './lessons/base-conjugations/base-conjugations.component';
import { FutureTensAndQuestionsComponent } from './lessons/future-tens-and-questions/future-tens-and-questions.component';
import { SettingsFormComponent } from './shared/components/settings-form/settings-form.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { ProfessionComponent } from './lessons/profession/profession.component';
import { ConjugationsComponent } from './shared/components/conjugations/conjugations.component';
import { TranslationsComponent } from './shared/components/translations/translations.component';
import { PhrasesComponent } from './shared/components/phrases/phrases.component';
import { TellAboutYourselfComponent } from './lessons/tell-about-yourself/tell-about-yourself.component';
import { MoveVerbsPastTenseComponent } from './lessons/move-verbs-past-tense/move-verbs-past-tense.component';
import { PossessivePronounsComponent } from './lessons/possessive-pronouns/possessive-pronouns.component';
import { PronounDeclensionComponent } from './lessons/pronoun-declension/pronoun-declension.component';
import { FamilyComponent } from './lessons/family/family.component';
import { FoodComponent } from './lessons/food/food.component';
import { NumbersComponent } from './lessons/numbers/numbers.component';
import { ImperativeFormComponent } from './lessons/imperative-form/imperative-form.component';
import { PastEventsAndAdjectivesComponent } from './lessons/past-events-and-adjectives/past-events-and-adjectives.component';
import { CasesComponent } from './lessons/cases/cases.component';
import { BodyPartsComponent } from './lessons/body-parts/body-parts.component';
import { OrdinalNumbersComponent } from './lessons/ordinal-numbers/ordinal-numbers.component';
import { DirectionsComponent } from './lessons/directions/directions.component';
import { OrderLettersComponent } from './learn-words/order-letters/order-letters.component';
import { OrderWordLettersComponent } from './learn-words/order-word-letters/order-word-letters.component';
import { MatchTranslationsComponent } from './learn-words/match-translations/match-translations.component';
import { ChooseTranslationComponent } from './learn-words/choose-translation/choose-translation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LessonsNavigationComponent } from './shared/components/lessons-navigation/lessons-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseConjugationsComponent,
    FutureTensAndQuestionsComponent,
    SettingsFormComponent,
    NavigationComponent,
    ProfessionComponent,
    ConjugationsComponent,
    TranslationsComponent,
    PhrasesComponent,
    TellAboutYourselfComponent,
    MoveVerbsPastTenseComponent,
    PossessivePronounsComponent,
    PronounDeclensionComponent,
    FamilyComponent,
    FoodComponent,
    NumbersComponent,
    ImperativeFormComponent,
    PastEventsAndAdjectivesComponent,
    CasesComponent,
    BodyPartsComponent,
    OrdinalNumbersComponent,
    DirectionsComponent,
    OrderLettersComponent,
    OrderWordLettersComponent,
    MatchTranslationsComponent,
    ChooseTranslationComponent,
    HomePageComponent,
    LessonsNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
