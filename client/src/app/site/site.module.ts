import { CustomCurrencyPipe } from './classes/pipes/custom-currency.pipe'
import { TaskService } from '../services/task.service'
import { TokenInterceptor } from './classes/token.interceptor'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { GoodsService } from '../services/goods.service'
import { NgModule } from '@angular/core'
import { SiteContainer } from './site-container.component'
import { HeaderComponent } from './components/general/header/header.component'
import { SidebarMenuComponent } from './components/general/sidebar-menu/sidebar-menu.component'
import { AnalyticsComponent } from './components/analytics/analytics.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { GoodsComponent } from './components/goods/goods.component'
import { TabMenuModule } from 'primeng/tabmenu'
import { AllGoodsComponent } from './components/goods/goods-components/all-goods/all-goods.component'
import { PostingComponent } from './components/goods/goods-components/posting/posting.component'
import { LeavingsComponent } from './components/goods/goods-components/leavings/leavings.component'
import { InventoryComponent } from './components/goods/goods-components/inventory/inventory.component'
import { ToolbarModule } from 'primeng/toolbar'
import { RippleModule } from 'primeng/ripple'
import { ButtonModule } from 'primeng/button'
import { TableModule } from 'primeng/table'
import { AddGoodsComponent } from './components/goods/goods-components/a-goods-common-components/add-goods/add-goods.component'
import { DialogModule } from 'primeng/dialog'
import { InputTextModule } from 'primeng/inputtext'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DropdownModule } from 'primeng/dropdown'
import { InputNumberModule } from 'primeng/inputnumber'
import { FileUploadModule } from 'primeng/fileupload'
import { TasksComponent } from './components/tasks/tasks.component'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'
import { AddTaskComponent } from './components/tasks/pop-up/add-task/add-task.component'
import { CalendarModule } from 'primeng/calendar'
import { AddPostingsComponent } from './components/goods/goods-components/a-goods-common-components/add-postings/add-postings.component'
import { DynamicDialogModule } from 'primeng/dynamicdialog'
import { UserProfileComponent } from './components/general/user-profile/user-profile.component'
import { EditCategoryComponent } from './components/general/user-profile/edit-category/edit-category.component'
import { AuthGuard } from '../auth/common/auth.guard'
import { TreeModule } from 'primeng/tree'
import { InputMaskModule } from 'primeng/inputmask'
import { AddCategoryComponent } from './components/general/user-profile/edit-category/add-category/add-category/add-category.component'
import { TreeSelectModule } from 'primeng/treeselect'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { PostingDetailsComponent } from './components/goods/goods-components/a-goods-common-components/posting-details/posting-details.component'
import { EditStocksComponent } from './components/general/user-profile/edit-stocks/edit-stocks.component'
import { SalesComponent } from './components/sales/sales.component'
import { AllSalesComponent } from './components/sales/all-sales/all-sales.component'
import { PointsOfSaleComponent } from './components/sales/points-of-sale/points-of-sale.component'
import { ReturnsComponent } from './components/sales/returns/returns.component'
import { DepositsComponent } from './components/sales/deposits/deposits.component'
import { CounterpartiesComponent } from './components/counterparties/counterparties.component'
import { AddCounterpartyComponent } from './components/counterparties/dialogs/add-counterparty/add-counterparty.component'
import { AddPointOfSalesComponent } from './components/sales/dialogs/add-point-of-sales/add-point-of-sales.component'
import { AgentsService } from '../services/agents.service'
import { AddSalesComponent } from './components/sales/dialogs/add-sales/add-sales.component'

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
    PostingDetailsComponent,
    EditStocksComponent,
    SalesComponent,
    AllSalesComponent,
    PointsOfSaleComponent,
    ReturnsComponent,
    DepositsComponent,
    CounterpartiesComponent,
    AddCounterpartyComponent,
    AddPointOfSalesComponent,
    AddSalesComponent,
    CustomCurrencyPipe,
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
    TreeSelectModule,
    ConfirmDialogModule,
    InputMaskModule,
  ],
  providers: [
    GoodsService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
    AuthGuard,
    TaskService,
    AgentsService,
  ],
  bootstrap: [SiteContainer],
})
export class SiteModule {}
