import { MainModule } from './elements/main/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { MainComponent } from './elements/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';



Component({
    selector: 'app-root',
    templateUrl: '/app.component.html',
    styleUrls: ['./app.component.css']
})

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        HomeComponent,
        ErrorPageComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule,
    ]
})
export class AppModule implements OnInit {
    title = "my-app";
    constructor(public responsive: BreakpointObserver) { }
    
    ngOnInit() {
        this.responsive
    .observe([Breakpoints.HandsetPortrait])
    .subscribe((state: BreakpointState) => {
        if (state.matches) { console.log('This is the Handset Portrait point at max-width: 599.98 px and portrait orientation.') }
    });
    }

    
 }
