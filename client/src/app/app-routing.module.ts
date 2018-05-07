import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./core/auth.guard";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'app', loadChildren:'app/board-snap/board-snap.module#BoardSnapModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
