import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
