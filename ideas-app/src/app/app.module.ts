import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

import { ApiService } from '@app/services/api.service';
import { AuthService } from '@app/services/auth.service';
import { AppStoreModule } from '@app/store/app-store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /////////////////////////
    HttpClientModule,
    // Add NgRx into project
    // StoreModule.forRoot({}),
    // StoreDevtoolsModule.instrument(),
    AppStoreModule,
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
