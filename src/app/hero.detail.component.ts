import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { Location } from "@angular/common";
import { ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';


// Provides the Angular metadata for the component
@Component({
    selector: 'hero-detail', // Tag that will identify this component within the parent component's template
    templateUrl: './hero.detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

// Export since will need it somewhere
export class HeroDetailComponent implements OnInit {

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero)
    }

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    //@Input()
    hero: Hero;

    goBack(): void {
        this.location.back();
    }

}