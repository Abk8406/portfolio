import {
  Directive,
  ElementRef,
  Renderer2,
  effect,
  inject,
  input,
  untracked,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: 'i[bootstrapIcon]',
})
export class BootstrapIconDirective {
  readonly #renderer = inject(Renderer2);
  readonly #hostIconElementRef = inject(ElementRef<HTMLElement>);

  readonly bootstrapIcon = input.required<string>();

  readonly #updateIconTagsEffect = effect(() => {
    const bootstrapIcon = this.bootstrapIcon();

    untracked(() => {
      `bi bi-${bootstrapIcon}`
        .split(' ')
        .forEach((klass) =>
          this.#renderer.addClass(
            this.#hostIconElementRef.nativeElement,
            klass,
          ),
        );
    });
  });
}
