import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

defineCustomElements(window);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({ mode: 'ios' }), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
