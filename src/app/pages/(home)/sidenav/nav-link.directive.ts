import {
  AfterViewInit,
  Directive,
  ElementRef,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: 'a[appNavLink]',
  standalone: true,
})
export class NavLinkDirective implements AfterViewInit {
  readonly #parentLiElementRef = inject(ElementRef<HTMLAnchorElement>);
  readonly #renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    this.addClassesTo(
      this.#parentLiElementRef.nativeElement,
      'group flex cursor-pointer items-center gap-4 text-xs font-bold uppercase tracking-widest',
    );

    const textSpanElement =
      this.#parentLiElementRef.nativeElement.querySelector('span')!;

    this.addClassesTo(
      textSpanElement,
      'transition-all group-hover:text-teal-500 group-[&.active]:text-teal-500',
    );

    const underlineSpanElement = this.#renderer.createElement('span');
    this.addClassesTo(
      underlineSpanElement,
      'h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-teal-500 group-[&.active]:w-16 group-[&.active]:bg-teal-500',
    );

    this.#renderer.insertBefore(
      this.#parentLiElementRef.nativeElement,
      underlineSpanElement,
      textSpanElement,
    );
  }

  private addClassesTo(element: HTMLElement, classes: string): void {
    classes
      .split(' ')
      .forEach((klass) => this.#renderer.addClass(element, klass));
  }
}
