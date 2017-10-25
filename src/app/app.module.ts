import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import {HeroDetailComponent} from "./hero.detail.component";

import {HeroesComponent} from './heroes.component';
import {HeroService} from "./hero.service";
import {AppComponent} from "./app.component";

import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDbService} from "angular-in-memory-web-api";

// In memory api

@NgModule({
    declarations: [ // Contains a list of application components, pipes and directives belonging to the module
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        HttpClient,
        InMemoryWebApiModule
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
