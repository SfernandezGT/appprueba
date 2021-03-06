import { Component } from "@angular/core";
import { Calendar } from "@ionic-native/calendar/ngx";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(private readonly calendar: Calendar) {}

  calendario() {
    this.calendar.createCalendar("MyCalendar").then(
      (msg) => {
        console.log(msg);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
