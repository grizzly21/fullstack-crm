import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AuthContainer} from "./auth/auth-container.component";
import {SiteContainer} from "./site/site-container.component";
import {AuthGuard} from "./auth/common/auth.guard";
import {AnalyticsComponent} from "./site/components/analytics/analytics.component";
import {GoodsComponent} from "./site/components/goods/goods.component";

const routes: Routes = [
  {
    path: '', component: AuthContainer, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  },
  {
    path: '', component: SiteContainer, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'analytics', pathMatch: 'full'},
      {path: 'analytics', component: AnalyticsComponent},
      {path: 'goods', component: GoodsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {

}
