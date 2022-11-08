import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { HttpClientModule } from '@angular/common/http';
import { biomartGenesComponent } from './components/biomartGenes/biomartGenes.component';

// d3 test
import { test } from './components/testd3/test.component';

@NgModule({
  declarations: [
    AppComponent,
    biomartGenesComponent,
    test,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
