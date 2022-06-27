import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'show-mahmoud', pathMatch: 'full' },
  {
    path: 'show-mahmoud',
    loadChildren: () =>
      import('./elements/elements.module').then((m) => m.ElementsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
