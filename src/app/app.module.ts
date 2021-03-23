import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { WordListComponent } from './word-list/word-list.component';
import { PracticeComponent } from './practice/practice.component';
import { ExamComponent } from './exam/exam.component';
import { WordService } from './word.service';
import { MatButtonModule } from '@angular/material/button';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatSortModule,
} from '@angular/material';


@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSortModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/word-list', pathMatch: 'full' },
      { path: 'word-list', component:  WordListComponent},
      { path: 'practice', component: PracticeComponent },
      { path: 'exam', component: ExamComponent }
    ])
  ],
  exports: [ ],
  declarations: [
    AppComponent,
    TopBarComponent,
    WordListComponent,
    PracticeComponent,
    ExamComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [WordService]
})
export class AppModule { }


