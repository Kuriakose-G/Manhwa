import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { ViewManhwaComponent } from './view-manhwa/view-manhwa.component';

const routes: Routes = [
  {
    path:'',redirectTo:'manhwa/Home',pathMatch:'full'
  },
  {
    path:'manhwa/Home',component:HomeComponent
  },
  {
    path:'manhwa/add',component:AddNewComponent
  }, 
  {
    path:'manhwa/update/:Id',component:UpdateDetailsComponent
  },
  {
    path:'manhwa/view/:manhwaId',component:ViewManhwaComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
