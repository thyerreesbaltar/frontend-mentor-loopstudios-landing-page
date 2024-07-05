import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';

//Interfaces
import { IImage } from '../../../../shared/interfaces/iimage';

//Components
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, LayoutModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private pathAssets = signal<string>('assets/img');

  public creationImages = signal<IImage[]>([]);

  #breakpointObserver = inject(BreakpointObserver);

  layoutChanges = this.#breakpointObserver.observe(['(max-width: 375px)']);

  ngOnInit(): void {
    this.layoutChanges.subscribe((result) => {
      this.creationImages.update(() => {
        if (result.matches) {
          return [
            {
              src: `${this.pathAssets()}/mobile/image-deep-earth.jpg`,
              alt: 'Deep earth',
            },
            {
              src: `${this.pathAssets()}/mobile/image-night-arcade.jpg`,
              alt: 'Night arcade',
            },
            {
              src: `${this.pathAssets()}/mobile/image-soccer-team.jpg`,
              alt: 'Soccer team VR',
            },
            {
              src: `${this.pathAssets()}/mobile/image-grid.jpg`,
              alt: 'The grid',
            },
            {
              src: `${this.pathAssets()}/mobile/image-from-above.jpg`,
              alt: 'From up above VR',
            },
            {
              src: `${this.pathAssets()}/mobile/image-pocket-borealis.jpg`,
              alt: 'Pocket borealis',
            },
            {
              src: `${this.pathAssets()}/mobile/image-curiosity.jpg`,
              alt: 'The curiosity',
            },
            {
              src: `${this.pathAssets()}/mobile/image-fisheye.jpg`,
              alt: 'Make it fisheye',
            },
          ];
        } else {
          return [
            {
              src: `${this.pathAssets()}/desktop/image-deep-earth.jpg`,
              alt: 'Deep earth',
            },
            {
              src: `${this.pathAssets()}/desktop/image-night-arcade.jpg`,
              alt: 'Night arcade',
            },
            {
              src: `${this.pathAssets()}/desktop/image-soccer-team.jpg`,
              alt: 'Soccer team VR',
            },
            {
              src: `${this.pathAssets()}/desktop/image-grid.jpg`,
              alt: 'The grid',
            },
            {
              src: `${this.pathAssets()}/desktop/image-from-above.jpg`,
              alt: 'From up above VR',
            },
            {
              src: `${this.pathAssets()}/desktop/image-pocket-borealis.jpg`,
              alt: 'Pocket borealis',
            },
            {
              src: `${this.pathAssets()}/desktop/image-curiosity.jpg`,
              alt: 'The curiosity',
            },
            {
              src: `${this.pathAssets()}/desktop/image-fisheye.jpg`,
              alt: 'Make it fisheye',
            },
          ];
        }
      });
    });
  }
}
