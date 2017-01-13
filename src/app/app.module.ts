import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// Import app custom modules
import { AppRoutingModule } from './app.routes';
import { AuthModule } from './auth';
import { DashboardModule } from './dashboard';
// Import app components
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    // Import our custom App modules
    AppRoutingModule,
    AuthModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
