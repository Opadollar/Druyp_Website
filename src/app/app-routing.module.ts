import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyPropertyComponent } from './pages/my-property/my-property.component';
import { AddNewRequestComponent } from './pages/add-new-request/add-new-request.component';
import { BookedPropertyComponent } from './pages/booked-property/booked-property.component';
import { CancelledPropertyComponent } from './pages/cancelled-property/cancelled-property.component';
import { NewRequestPaymentComponent } from './pages/new-request-payment/new-request-payment.component';
import { MyPropertyDetailComponent } from './pages/my-property-detail/my-property-detail.component';
import { AboutComponent } from './commonpages/about/about.component';
import { ContactComponent } from './commonpages/contact/contact.component';
import { PrivacyComponent } from './commonpages/privacy/privacy.component';
import { FurnituresComponent } from './furniture/furnitures/furnitures.component';
import { AddFurnitureComponent } from './furniture/add-furniture/add-furniture.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { ReceivedOrderDetailComponent } from './pages/received-order-detail/received-order-detail.component';
import { CompletedOrderDetailComponent } from './pages/completed-order-detail/completed-order-detail.component';
import { CancelledOrderDetailComponent } from './pages/cancelled-order-detail/cancelled-order-detail.component';
import { AddCleanersComponent } from './cleaning/add-cleaners/add-cleaners.component';
import { CleanersComponent } from './cleaning/cleaners/cleaners.component';
import { FurnitureProfileComponent } from './furniture/furniture-profile/furniture-profile.component';
import { CleanersProfileComponent } from './cleaning/cleaners-profile/cleaners-profile.component';
import { OwnerPropertiesComponent } from './owner/owner-properties/owner-properties.component';
import { OwnerProfileComponent } from './owner/owner-profile/owner-profile.component';
import { OwnerBookedPropertiesComponent } from './owner/owner-booked-properties/owner-booked-properties.component';
import { ListNewPropertyComponent } from './owner/list-new-property/list-new-property.component';
import { OwnerMyPropertiesComponent } from './owner/owner-my-properties/owner-my-properties.component';
import { BookingRequestComponent } from './owner/booking-request/booking-request.component';
import { BookingRequestDetailComponent } from './owner/booking-request-detail/booking-request-detail.component';
import { PropertiesUnderReviewComponent } from './owner/properties-under-review/properties-under-review.component';
import { PropertiesDeclinedComponent } from './owner/properties-declined/properties-declined.component';
import { PropertyBookedByRenterComponent } from './owner/property-booked-by-renter/property-booked-by-renter.component';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'product-detail',component: ProductDetailComponent},
  {path: 'payment',component: PaymentComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'property',component: MyPropertyComponent},
  {path: 'add-new-request',component: AddNewRequestComponent},
  {path: 'booked-property',component: BookedPropertyComponent},
  {path: 'cancelled-property',component: CancelledPropertyComponent},
  {path: 'new-request-payment',component: NewRequestPaymentComponent},
  {path: 'my-property-details',component: MyPropertyDetailComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'privacy',component: PrivacyComponent},
  {path: 'furniture',component: FurnituresComponent},
  {path: 'add-furniture',component: AddFurnitureComponent},
  {path: 'my-orders',component: MyOrdersComponent},
  {path: 'received-order-detail',component: ReceivedOrderDetailComponent},
  {path: 'completed-order-detail',component: CompletedOrderDetailComponent},
  {path: 'cancelled-order-detail',component: CancelledOrderDetailComponent},
  {path: 'add-cleaners',component: AddCleanersComponent},
  {path: 'cleaners',component: CleanersComponent},
  {path: 'furniture-profile',component: FurnitureProfileComponent},
  {path: 'cleaners-profile',component: CleanersProfileComponent},

  {path: 'owner-properties',component: OwnerPropertiesComponent},
  {path: 'owner-profile',component: OwnerProfileComponent},
  {path: 'owner-approved-properties',component: OwnerBookedPropertiesComponent},
  {path: 'list-new-property',component: ListNewPropertyComponent},
  {path: 'owner-my-properties',component: OwnerMyPropertiesComponent},
  {path: 'booking-request',component: BookingRequestComponent},
  {path: 'booking-request-detail',component: BookingRequestDetailComponent},
  {path: 'property-under-verification',component: PropertiesUnderReviewComponent},
  {path: 'property-declined',component: PropertiesDeclinedComponent},
  {path: 'property-booked-by-renter',component: PropertyBookedByRenterComponent},
  // 
  {path: '404',component:NotfoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
