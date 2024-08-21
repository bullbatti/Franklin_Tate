import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

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
    }
];
