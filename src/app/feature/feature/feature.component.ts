import { Component, OnInit } from "@angular/core";
import { VoteService } from "src/app/vote.service";

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"]
})
export class FeatureComponent implements OnInit {
  votes;
  constructor(private vt: VoteService) {}

  ngOnInit() {
    this.votes = this.vt.getVotes();
  }
}
