import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public githubMark: string = "assets/github-mark/github-mark-white.png";
  public xMark: string = "assets/x-mark/logo-white.png";
}
