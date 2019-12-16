import { Component, ViewChild, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MatDrawerContainer } from "@angular/material/sidenav";

import { VoteService } from "./vote.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  foods = new BehaviorSubject(["Bacon", "Lettuce", "Tomatoes"]);
  votes: number;

  @ViewChild(MatDrawerContainer, { static: true })
  drawerContainer: MatDrawerContainer;
  constructor(private vt: VoteService) {}

  ngOnInit() {
    this.votes = this.vt.getVotes();
    this.vt.setVotes(25);
  }

  addFood(food) {
    // this.foods.push(food);
    // this.foods = [food, ...this.foods];

    this.foods.next([food]);
    // console.log(this.foods);
  }

  // ngAfterViewInit(): void {
  //   this.drawerContainer.scrollable
  //     .elementScrolled()
  //     .subscribe(a => console.log(a));
  // }

  // onToggle() {}

  refresh() {
    this.votes = this.vt.getVotes();
  }
}
