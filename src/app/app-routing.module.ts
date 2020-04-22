import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CustmizationComponent } from './custmization/custmization.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UsecaseComponent } from './usecase/usecase.component';
import { CompanyIndustryComponent } from './company-industry/company-industry.component';
import { GeneralComponent } from './general/general.component';
import { SettingComponent } from './setting/setting.component';
import { ExampletableComponent } from './exampletable/exampletable.component';
import { ChatinterfaceComponent } from './chatinterface/chatinterface.component';
import { CreatevariablesComponent } from './createvariables/createvariables.component';
import { FilterComponent } from './filter/filter.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CreateBotComponent } from './create-bot/create-bot.component';
import { TemplateComponent } from './template/template.component';
import { AnalyzeUserComponent } from './analyze-user/analyze-user.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { DashtempComponent } from './dashtemp/dashtemp.component';

import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
  // { path: 'Errors', component: ErrorsComponent },
  { path:'CompanyInfo', component: CompanyInfoComponent },
  { path:'Custmization', component: CustmizationComponent },
  { path:'Avatar', component: AvatarComponent},
  { path:'Usecase', component: UsecaseComponent },
  { path:'Industry', component: CompanyIndustryComponent },
   { path:'sample', component: SampleComponent },

    { path:'Dashboard', component: DashboardComponent ,
    children:[
      { path: 'dashboard1' ,component: Dashboard1Component,
      children:[
        { path: 'analyze' ,component: AnalyzeUserComponent },   
      ]
    },

      { path:'Chatlist', component: ChatlistComponent },
      {path:'General', component: GeneralComponent,children:[
        { path:'Setting', component: SettingComponent },
        ]},
        
        {path:'exampletable', component:ExampletableComponent,children:[
          {path:'chatinterface', component:ChatinterfaceComponent},
            {path:'filter', component: FilterComponent},
          {path:'createvariables', component:CreatevariablesComponent},
          {
            path: '',
            redirectTo: 'chatinterface',
            pathMatch: 'full'
          },
        ]},
    
        { path: 'dashtemp' ,component: DashtempComponent,
        children:[
          { path: 'template' ,component: TemplateComponent },
        ]
      },    

      
  
    { path: 'createbot' ,component: CreateBotComponent },

      

    ]},

    
    { path: 'login' ,component: LoginComponent },
    { path: 'error' ,component: ErrorPageComponent },
  
  
  
  
  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
