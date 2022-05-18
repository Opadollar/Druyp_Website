import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
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

// ---------- Sevice call------
import {GlobalService} from './services/global.service';
import { PropertiesUnderReviewComponent } from './owner/properties-under-review/properties-under-review.component';
import { PropertiesDeclinedComponent } from './owner/properties-declined/properties-declined.component';
import { PropertyBookedByRenterComponent } from './owner/property-booked-by-renter/property-booked-by-renter.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    ProductDetailComponent,
    PaymentComponent,
    ProfileComponent,
    MyPropertyComponent,
    AddNewRequestComponent,
    BookedPropertyComponent,
    CancelledPropertyComponent,
    NewRequestPaymentComponent,
    MyPropertyDetailComponent,
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    FurnituresComponent,
    AddFurnitureComponent,
    MyOrdersComponent,
    ReceivedOrderDetailComponent,
    CompletedOrderDetailComponent,
    CancelledOrderDetailComponent,
    AddCleanersComponent,
    CleanersComponent,
    FurnitureProfileComponent,
    CleanersProfileComponent,
    OwnerPropertiesComponent,
    OwnerProfileComponent,
    OwnerBookedPropertiesComponent,
    ListNewPropertyComponent,
    OwnerMyPropertiesComponent,
    BookingRequestComponent,
    BookingRequestDetailComponent,
    PropertiesUnderReviewComponent,
    PropertiesDeclinedComponent,
    PropertyBookedByRenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SlickCarouselModule,
    CarouselModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
