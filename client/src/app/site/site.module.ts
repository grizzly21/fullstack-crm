import {TokenInterceptor} from './classes/token.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GoodsService} from './classes/services/goods.service';
import {NgModule} from '@angular/core';
import {SiteContainer} from './site-container.component';
import {HeaderComponent} from './components/general/header/header.component';
import {SidebarMenuComponent} from './components/general/sidebar-menu/sidebar-menu.component';
import {AnalyticsComponent} from './components/analytics/analytics.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {GoodsComponent} from './components/goods/goods.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {AllGoodsComponent} from './components/goods/goods-components/all-goods/all-goods.component';
import {PostingComponent} from './components/goods/goods-components/posting/posting.component';
import {LeavingsComponent} from './components/goods/goods-components/leavings/leavings.component';
import {InventoryComponent} from './components/goods/goods-components/inventory/inventory.component';
import {ToolbarModule} from 'primeng/toolbar';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {
  AddGoodsComponent
} from './components/goods/goods-components/a-goods-common-components/add-goods/add-goods.component';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {FileUploadModule} from 'primeng/fileupload';
import {TasksComponent} from './components/tasks/tasks.component';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {AddTaskComponent} from './components/tasks/pop-up/add-task/add-task.component';
import {CalendarModule} from 'primeng/calendar';
import {
  AddPostingsComponent
} from './components/goods/goods-components/a-goods-common-components/add-postings/add-postings.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {UserProfileComponent} from './components/general/user-profile/user-profile.component';
import { EditCategoryComponent } from './components/general/user-profile/edit-category/edit-category.component'
import {AuthGuard} from "../auth/common/auth.guard";
import {TreeModule} from "primeng/tree";
import { AddCategoryComponent } from './components/general/user-profile/edit-category/add-category/add-category/add-category.component';
import {TreeSelectModule} from 'primeng/treeselect'

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarMenuComponent,
    AnalyticsComponent,
    GoodsComponent,
    SiteContainer,
    AllGoodsComponent,
    PostingComponent,
    LeavingsComponent,
    InventoryComponent,
    AddGoodsComponent,
    TasksComponent,
    AddTaskComponent,
    AddPostingsComponent,
    UserProfileComponent,
    EditCategoryComponent,
    AddCategoryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TabMenuModule,
    ToolbarModule,
    RippleModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputNumberModule,
    FileUploadModule,
    CardModule,
    DividerModule,
    CalendarModule,
    DynamicDialogModule,
    HttpClientModule,
    TreeModule,
    TreeSelectModule
  ],
  providers: [GoodsService, {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  },
    AuthGuard
  ],
  bootstrap: [SiteContainer],
})
export class SiteModule {
}
