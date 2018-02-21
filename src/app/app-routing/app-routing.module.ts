/**
 * Created by admin1 on 5/24/2017.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForgetPasswordComponent} from '../forget-password/forget-password.component';
import {LoginComponent} from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import { DocComponent } from '../doc/doc.component';
import { DownloadsComponent } from '../downloads/downloads.component';
import { ConfigComponent } from '../config/config.component';
import { AboutComponent } from 'app/about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ErrorComponent } from '../error/error.component';
import { merchantComponents, CreateMerchantComponent } from '../config/merchant/createmerchant.component';
import { terminalComponents, CreateTerminalComponent } from '../config/terminal/createterminal.component';
import {HomeComponent} from '../home/home.component';
import {MainComponent} from '../main/main.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: '', component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'doc', component: DocComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'config', component: ConfigComponent,
        children: [
          { path: '', component: CreateMerchantComponent },
          { path: 'addmerchant', component: CreateMerchantComponent },
          { path: 'addterminal', component: CreateTerminalComponent }
        ]},
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
  { path: '**', component: ErrorComponent, data: {error: '404', desc: 'Page Not Found' } }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [ LoginComponent, ForgetPasswordComponent, HomeComponent,
  ProductsComponent, DocComponent, DownloadsComponent, ConfigComponent, AboutComponent, ContactComponent, ErrorComponent,
  CreateMerchantComponent, CreateTerminalComponent, terminalComponents, merchantComponents ];
