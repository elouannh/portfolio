import { Component, Renderer2, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

enum TOGGLE_MODE {
  OFF,
  ON,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public backgroundStyle: string = 'var(--black)';
  public toggleMode: TOGGLE_MODE = TOGGLE_MODE.OFF;
  public mouseX: number = 0;
  public mouseY: number = 0;
  public scrollX: number = 0;
  public scrollY: number = 0;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  public light(): void {
    const [x, y]: [number, number] = [this.mouseX + this.scrollX, this.mouseY + this.scrollY];
    this.backgroundStyle = `radial-gradient(circle at ${x}px ${y}px, rgba(150, 150, 155, 0.8), black 2000px)`;
  }

  public toggleLight(event: MouseEvent): void {
    document.body.classList.remove('cursor-light-off', 'cursor-light-on');

    switch (this.toggleMode) {
      default:
      case TOGGLE_MODE.ON:
        this.toggleMode = TOGGLE_MODE.OFF;
        document.body.classList.add('cursor-light-off');
        this.backgroundStyle = `var(--black)`;
        break;
      case TOGGLE_MODE.OFF:
        this.toggleMode = TOGGLE_MODE.ON;
        document.body.classList.add('cursor-light-on');
        this.light();
        break;
    }
  }

  public animateLight(): void {
    if (this.toggleMode === TOGGLE_MODE.ON) this.light();
  }

  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    if (this.isPC()) this.animateLight();
  }

  onMouseClick(event: MouseEvent): void {
    if (this.isPC()) this.toggleLight(event);
  }

  ngOnInit() {
    this.renderer.listen(this.document, 'scroll', (event) => {
      this.scrollX = window.scrollX;
      this.scrollY = window.scrollY;
      this.animateLight();
    });
  }

  public isPC(): boolean {
    return !('ontouchstart' in window || navigator.maxTouchPoints > 1);
  }
}
