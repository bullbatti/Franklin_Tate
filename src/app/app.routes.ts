import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { GamesComponent } from './components/games/games.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LegendaryMotorsportComponent } from './components/legendary-motorsport/legendary-motorsport.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';

export const routes: Routes = [
    {
        path: "about",
        title: "Franklin Tate - About",
        component: AboutComponent
    },
    {
        path: "",
        redirectTo: "/about",
        pathMatch: 'full'
    },
    {
        path: "roadmap",
        title: "Franklin Tate - Roadmap",
        component: RoadmapComponent
    },
    {
        path: "games",
        title: "Franklin Tate - Games",
        component: GamesComponent,
            
    },
    {
        path: "legendary-motorsport",
        title: "Franklin Tate Game - Legendary Motorsport",
        component: LegendaryMotorsportComponent
    },
    {
        path: '**',
        title: 'Franklin Tate - Page not Found',
        component: NotFoundComponent
    }
];
