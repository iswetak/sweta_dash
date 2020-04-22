import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import{ HttpClientModule }  from '@angular/common/http';
import { ApiService } from './api.service';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ChatlistComponent } from './chatlist/chatlist.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CustmizationComponent } from './custmization/custmization.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UsecaseComponent } from './usecase/usecase.component';
import { CompanyIndustryComponent } from './company-industry/company-industry.component';
import { GeneralComponent } from './general/general.component';
import { SettingComponent } from './setting/setting.component';
import { ModalComponent } from './modal/modal.component';
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
import { DashtempComponent } from './dashtemp/dashtemp.component';
import { VaMatTableComponent } from './va-mat-table/va-mat-table.component';
import { ColumnSorterComponent } from './va-mat-table/actions/column-sorter/column-sorter.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { SampleComponent } from './sample/sample.component';




@NgModule({
  declarations: [
    AppComponent,
    ChatlistComponent,
    CompanyInfoComponent,
    CustmizationComponent,
    AvatarComponent,
    UsecaseComponent,
    CompanyIndustryComponent,
    GeneralComponent,
    SettingComponent,
    ModalComponent,
    ExampletableComponent,
    ChatinterfaceComponent,
    CreatevariablesComponent,
    FilterComponent,
    DashboardComponent,
    LoginComponent,
    ErrorPageComponent,
    CreateBotComponent,
    TemplateComponent,
    AnalyzeUserComponent,
    DashtempComponent,
    VaMatTableComponent,
    ColumnSorterComponent,
    Dashboard1Component,
    SampleComponent,




  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule ,
    MatGridListModule,
    MatSidenavModule,
    SlickCarouselModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSnackBarModule,
    A11yModule,
    DragDropModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    MatFormFieldModule,
    HttpClientModule 

  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
