import { Routes } from '@angular/router';
import { HeropageComponent } from './pages/heropage/heropage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';

export const routes: Routes = [
    {
        path:"",
        component: HeropageComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "navbar",
        component: NavbarComponent
    },
    {
        path: "add",
        component: AddComponent
    },
    {
        path: "find",
        component: FindComponent
    }
];
