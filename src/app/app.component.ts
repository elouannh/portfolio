import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title: string = 'portfolio';
  public toggled: boolean | 'unset' = 'unset';
  public backgroundStyle: string = 'var(--black)';

  public enableLight(event: MouseEvent): void {
    if (!this.toggled) {
      this.toggled = true;
      document.body.classList.add('cursor-light-on');
      document.body.classList.remove('cursor-light-off');
    }
    const x: number = event.pageX;
    const y: number = event.pageY;
    this.backgroundStyle = `radial-gradient(circle at ${x}px ${y}px, rgba(150, 150, 155, 0.8), black 2000px)`;
  }

  public disableLight(): void {
    document.body.classList.add('cursor-light-off');
    document.body.classList.remove('cursor-light-on');
    this.toggled = false;
    this.backgroundStyle = `var(--black)`;
  }

  onMouseMove(event: MouseEvent): void {
    if (this.toggled === "unset") this.enableLight(event);
    else if (this.toggled) this.enableLight(event);
  }

  onMouseClick(event: MouseEvent): void {
    if (this.toggled) this.disableLight();
    else this.enableLight(event);
  }
}
