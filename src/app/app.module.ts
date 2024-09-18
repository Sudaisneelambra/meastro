import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**angular materials */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { StationsComponent } from './pages/stations/stations.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { DeviceTestingComponent } from './pages/device-testing/device-testing.component';
import { BookingManageComponent } from './pages/booking-manage/booking-manage.component';
import { NewStationRequestComponent } from './pages/new-station-request/new-station-request.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { TotaldetailsComponent } from './components/totaldetails/totaldetails.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { StatuspiechartComponent } from './components/statuspiechart/statuspiechart.component';
import { UnitconsumedChartComponent } from './components/unitconsumed-chart/unitconsumed-chart.component';
import { ChargerDetailsComponent } from './components/charger-details/charger-details.component';
import { ParkingReportComponent } from './pages/parking-report/parking-report.component';
import { ChargeReportComponent } from './pages/charge-report/charge-report.component';
import { StationOwnerReportComponent } from './pages/station-owner-report/station-owner-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    StationsComponent,
    ComplaintsComponent,
    DeviceTestingComponent,
    BookingManageComponent,
    NewStationRequestComponent,
    ReportsComponent,
    ParkingReportComponent,
    ChargeReportComponent,
    StationOwnerReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NavabarComponent,
    TotaldetailsComponent,
    LineChartComponent,
    BarChartComponent,
    StatuspiechartComponent,
    UnitconsumedChartComponent,
    ChargerDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
