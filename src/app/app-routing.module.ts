import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StationsComponent } from './pages/stations/stations.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { DeviceTestingComponent } from './pages/device-testing/device-testing.component';
import { BookingManageComponent } from './pages/booking-manage/booking-manage.component';
import { NewStationRequestComponent } from './pages/new-station-request/new-station-request.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ParkingReportComponent } from './pages/parking-report/parking-report.component';
import { ChargeReportComponent } from './pages/charge-report/charge-report.component';
import { StationOwnerReportComponent } from './pages/station-owner-report/station-owner-report.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'stations',
        component:StationsComponent
      },
      {
        path:'complaints',
        component:ComplaintsComponent
      },
      {
        path:'device-testing',
        component:DeviceTestingComponent
      },
      {
        path:'booking-manage',
        component:BookingManageComponent
      },
      {
        path:'new-station-request',
        component:NewStationRequestComponent
      },
      {
        path:'reports',
        component:ReportsComponent,
        children:[
          {
            path:'parking-report',
            component:ParkingReportComponent
          },
          {
            path:'charge-report',
            component:ChargeReportComponent
          },
          {
            path:'station-owner-report',
            component:StationOwnerReportComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
