import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureComponent } from "./feature/feature.component";
import { VoteService } from "../vote.service";

@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule],
  exports: [FeatureComponent]
  // providers: [VoteService]
})
export class FeatureModule {}
