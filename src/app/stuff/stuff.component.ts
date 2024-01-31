import { Component, OnInit } from '@angular/core';
import { WakatimeService } from "../wakatime.service";

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrl: './stuff.component.scss'
})
export class StuffComponent implements OnInit {
  user: any;

  constructor(private wakatimeService: WakatimeService) {}

  public ngOnInit(): void {
    this.wakatimeService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
