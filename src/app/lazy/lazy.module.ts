import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ComponComponent } from "./compon/compon.component";

RouterModule.forChild([
  {
    path: "",
    component: ComponComponent
  }
]);

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: []
})
export class LazyModule {}
