import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ErrorComponent } from './lazy/errorHandling/error/error.component';
import { ErrorInterceptor } from './lazy/errorHandling/error-handler-interceptor/error-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WrapperModule } from './lazy/wrapper/wrapper.module';
import { CustomersModule } from './lazy/customers/customers.module';
import { ChartsModule } from './lazy/charts/charts.module';
import { NgChartsModule } from 'ng2-charts';
import { NumeriDirective } from './lazy/utility/numeri.directive';
import { NumbersModule } from './lazy/numbers/numbers.module';
import { GameModule } from './lazy/game/game.module';
import { OrdersModule } from './lazy/orders/orders.module';
import { ColorDirective } from './lazy/utility/color.directive';
import { GroupModule } from './lazy/group/group.module';
import { FileUploadModule } from './lazy/file-upload/file-upload.module';
import { LoginComponent } from './core/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { MapsModule } from './lazy/maps/maps.module';
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
    ],
  imports: [CoreModule,BrowserModule, AppRoutingModule,SharedModule,CustomersModule,NgChartsModule,ChartsModule,WrapperModule,NumbersModule,GameModule,OrdersModule,GroupModule,FormsModule,FileUploadModule,MapsModule],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
