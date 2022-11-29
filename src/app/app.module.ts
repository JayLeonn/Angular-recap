import { DetailModule } from './detail/detail.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import locFi from '@angular/common/locales/fi';
import { registerLocaleData } from '@angular/common';
import { PluralPipe } from './plural.pipe';
import { SortPipe } from './sort.pipe';
import { CalculatorComponent } from './calculators/calculator/calculator.component';
import { CalculatorContainerComponent } from './calculators/calculator-container/calculator-container.component';
import { EventCalculatorComponent } from './calculators/event-calculator/event-calculator.component';
import { MatButtonModule } from '@angular/material/button';

registerLocaleData(locFi);

/* Recap: Root Module */

@NgModule({

  /* Recap: The set of components, directives, and pipes (declarables) that belong to this module. */
  /* PRIVATELY availiable to this module only */
  declarations: [
    AppComponent,
    BooklistComponent,
    PluralPipe,
    SortPipe,
    CalculatorComponent,
    CalculatorContainerComponent,
    EventCalculatorComponent,
  ],

  /* Recap: the set of dependency modules for this module to work. For example, to use two way binding, we need to import the FormsModule here */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DetailModule, /* Recap: A feature module! */
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
