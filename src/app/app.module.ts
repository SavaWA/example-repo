import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MatSidenavModule } from "@angular/material/sidenav";

import { AppRoutingModule } from "./app-routing.module";
import { FeatureModule } from "./feature/feature.module";
import { AppComponent } from "./app.component";
import { ChildComponent } from "./child/child.component";
import { RouterModule } from "@angular/router";

RouterModule.forRoot([
  {
    path: "lazy",
    loadChildren: "./lazy/lazy.module#LazyModule"
  }
]);

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
