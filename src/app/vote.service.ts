import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VoteService {
  votes = 10;
  constructor() {}

  getVotes() {
    return this.votes;
  }

  setVotes(vote) {
    this.votes = vote;
  }
}
