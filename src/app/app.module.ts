import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatNativeDateModule, MatListModule, MatSlideToggleModule} from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { ResourcesComponent } from './resources/resources.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TransportationComponent } from './transportation/transportation.component';
import { MultiDayDialogComponent } from './multi-day-dialog/multi-day-dialog.component';
import { MultiDayComponent } from './multi-day/multi-day.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FileFinderComponent } from './file-finder/file-finder.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NewUserComponent,
    ResourcesComponent,
    DialogComponent,
    TransportationComponent,
    MultiDayDialogComponent,
    MultiDayComponent,
    PurchaseComponent,
    PaymentDialogComponent,
    FileFinderComponent
  ],
  entryComponents:[DialogComponent, MultiDayDialogComponent,PaymentDialogComponent,FileFinderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule,
    MatSlideToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
