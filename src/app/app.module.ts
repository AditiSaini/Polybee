import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PanelComponent } from './panel/panel.component';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { allAppRoutes } from './routes';
import { ReactiveFormsModule } from '@angular/forms';

import { WeatherApiService } from './weather-api.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    PanelComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
