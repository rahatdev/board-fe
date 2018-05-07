import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { NavigatorComponent } from './boards/navigator.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardService } from './board.service';
//import { BoardActions } from './board.actions';
import { BoardsCardComponent } from './boards-card/boards-card.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'boards', component: BoardsComponent },
  { path: 'boards/:id', component: NavigatorComponent },
  { path: '', redirectTo: 'boards', pathMatch: 'full' },
  { path: '**', redirectTo: 'boards', pathMatch: 'full' },
]

@NgModule({
  imports: [
    // CommonModule,
    MaterialModule,
    FormsModule,
    // ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardComponent,
    BoardsComponent,
    NavigatorComponent,
    BoardsCardComponent
  ],
  providers: [
    BoardService, 
    //BoardActions
  ]
})
export class BoardSnapModule { }
