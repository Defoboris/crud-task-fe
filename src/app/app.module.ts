import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TaskScreenComponent } from './screens/task-screen/task-screen.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent,
    TaskScreenComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ]
})
export class AppModule { }
