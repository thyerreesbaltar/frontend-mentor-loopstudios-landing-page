import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
//Interfaces
import { IImage } from '../../interfaces/iimage';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public socialMediaIcons = signal<IImage[]>([
    {
      src: '/assets/icons/icon-facebook.svg',
      alt: 'Access our Facebook',
    },
    {
      src: '/assets/icons/icon-twitter.svg',
      alt: 'Access our Twitter',
    },
    {
      src: '/assets/icons/icon-pinterest.svg',
      alt: 'Access our Pinterest',
    },
    {
      src: '/assets/icons/icon-instagram.svg',
      alt: 'Access our Instagram',
    },
  ]);
}
