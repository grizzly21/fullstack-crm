import {NgModule} from "@angular/core";
import {SiteContainer} from "./site-container.component";
import {HeaderComponent} from "./components/general/header/header.component";
import {SidebarMenuComponent} from "./components/general/sidebar-menu/sidebar-menu.component";
import {AnalyticsComponent} from "./components/analytics/analytics.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {GoodsComponent} from "./components/goods/goods.component";
import {TabMenuModule} from "primeng/tabmenu";
import { AllGoodsComponent } from './components/goods/goods-components/all-goods/all-goods.component';
import { PostingComponent } from './components/goods/goods-components/posting/posting.component';
import { LeavingsComponent } from './components/goods/goods-components/leavings/leavings.component';
import { InventoryComponent } from './components/goods/goods-components/inventory/inventory.component';
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import { AddGoodsComponent } from './components/goods/goods-components/a-goods-common-components/add-goods/add-goods.component';
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {FileUploadModule} from "primeng/fileupload";

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
    AddGoodsComponent
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
    FileUploadModule
  ],
  providers: [],
  bootstrap: [SiteContainer]
})
export class SiteModule {
}
