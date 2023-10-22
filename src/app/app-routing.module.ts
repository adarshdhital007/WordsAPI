import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SynonymComponent } from './synonym/synonym.component';
import { SimilarComponent } from './similar/similar.component';
const routes: Routes = [
  { path: '', component:SynonymComponent },
  { path: 'synonyms', component: SynonymComponent },
  { path: 'similar', component: SimilarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
