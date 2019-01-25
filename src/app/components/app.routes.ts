import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const APP_ROUTES: Routes = [{ path: "", component: HomeComponent }];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
