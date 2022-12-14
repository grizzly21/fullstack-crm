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

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarMenuComponent,
    AnalyticsComponent,
    GoodsComponent,
    SiteContainer
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [SiteContainer]
})
export class SiteModule {
}
