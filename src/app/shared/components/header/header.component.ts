import { NgClass } from '@angular/common';
import {
  Component,
  HostListener,
  OnInit,
  Renderer2,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { IImage } from '../../interfaces/iimage';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  animate,
  keyframes,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('menu-animation', [
      transition('*=>true', [
        query('ul', [
          style({
            transform: 'translateX(-230px)',
          }),
          animate('1.5s'),
        ]),
      ]),
    ]),

    trigger('button-animetion', [
      transition('*=>true', [
        query('img', [
          animate(
            '1s',
            keyframes([
              style({
                opacity: 0,
              }),
              style({
                opacity: 0.5,
              }),
              style({
                opacity: 1,
              }),
            ])
          ),
        ]),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  public buttonMenu = signal<IImage>({
    src: '/assets/icons/icon-hamburger.svg',
    alt: 'Open menu',
  });

  public menuState = signal(false);

  #renderer = inject(Renderer2);

  #breakpointObserver = inject(BreakpointObserver);

  public isSmallScreen = signal<boolean>(false);

  @HostListener('window:resize') //Este decorador escuta o evento de redimensionamento da janela. Quando o evento ocorre, ele chama o método onResize passando o evento como argumento.
  onReSize() {
    //Irá setar true caso o tamanho da tela seja no maximo 375px e false se não for
    this.isSmallScreen.set(
      this.#breakpointObserver.isMatched('(max-width: 767px)')
    );

    if (!this.isSmallScreen()) {
      if (this.menuState()) {
        this.toggleButtonMenu();
      }
    }
  }

  ngOnInit(): void {
    //Chamará o metodo ao carregar o componente para poder setar se o tamanho da tela é maior que 375px
    this.onReSize();
  }

  public toggleButtonMenu() {
    if (this.menuState()) {
      this.#renderer.removeClass(document.body, 'no-scroll');

      this.buttonMenu.set({
        src: '/assets/icons/icon-hamburger.svg',
        alt: 'Open menu',
      });
    } else {
      this.#renderer.addClass(document.body, 'no-scroll');

      this.buttonMenu.set({
        src: '/assets/icons/icon-close.svg',
        alt: 'Close menu',
      });
    }
    this.menuState.set(!this.menuState());
  }
}
