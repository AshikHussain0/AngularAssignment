import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule, NavModule, SidebarModule, SpinnerModule } from '@coreui/angular';
import { NavbarModule } from '@coreui/angular';
import { RouterModule } from '@angular/router'; 
import { routes } from './app.routes';
import { EmissionsModule } from './emissions/emissions.module';
import { BusinessLinesModule } from './business-lines/business-lines.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    RouterModule,
    NavbarModule,
    HeaderModule,
    EmissionsModule,
    BusinessLinesModule,
    HttpClientModule,
    NavModule,
    RouterModule.forRoot(routes),
    SharedModule,
    ToastrModule.forRoot()
],
  providers: [], 
  bootstrap: [AppComponent],
})
export class AppModule {}
