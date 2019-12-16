import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() data: Observable<any>;
  foods: string[] = [];
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.data.subscribe(food => {
      console.log(food);

      this.foods = [...this.foods, ...food];
      this.cd.markForCheck();
    });
  }

  onDetection() {
    // this.cd.detectChanges();
  }
}
