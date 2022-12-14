import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NewSearchComponent } from './new-search/new-search.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NewSearchService } from './new-search/new-search.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightSearchPipe } from './new-search/highlightPipe';
import { HighlightDirective } from './highlight.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: NewSearchComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    HighlightSearchPipe,
    NewSearchComponent,
    HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbAlertModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [
  NewSearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
