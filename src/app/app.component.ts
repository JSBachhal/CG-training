import { AfterViewInit, Component, ElementRef,  VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('can', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  context: RenderingContext | CanvasRenderingContext2D;
  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.context.fillStyle = '#ff3';

    this.context.strokeRect(110, 110, 100, 100);
    this.context.fillRect(110, 110, 100, 100);
    this.gameloop();
  }

  gameloop() {

  }
}
