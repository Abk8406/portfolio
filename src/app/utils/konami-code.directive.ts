import {
  Directive,
  HostListener,
  effect,
  output,
  signal,
  untracked,
} from '@angular/core';

type KeyCode =
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'KeyB'
  | 'KeyA'
  | undefined;

const konamiCode: KeyCode[] = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

const keyMap: Record<string, KeyCode> = {
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  a: 'KeyA',
  b: 'KeyB',
  A: 'KeyA',
  B: 'KeyB',
};

@Directive({
  selector: '[konamiCodeEntered]',
  standalone: true,
})
export class KonamiCodeDirective {
  readonly #currentSequence = signal<KeyCode[]>([]);
  readonly konamiCodeEntered = output<void>();

  readonly #verifyKonamiCodeEffect = effect(() => {
    const currentSequence = this.#currentSequence();

    untracked(() => {
      {
        const isKonamiCodeCorrect = this.#areArraysEqual(
          currentSequence,
          konamiCode,
        );

        if (isKonamiCodeCorrect) {
          this.konamiCodeEntered.emit();
        }
      }
    });
  });

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const keyPressed = keyMap[event.key];

    this.#currentSequence.update((sequence) => {
      const next = [...sequence, keyPressed];

      if (next.length > konamiCode.length) {
        next.splice(0, 1);
      }

      return next;
    });
  }

  #areArraysEqual(a: KeyCode[], b: KeyCode[]): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
  }
}
