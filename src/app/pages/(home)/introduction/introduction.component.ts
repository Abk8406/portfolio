import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-introduction',
    imports: [],
    standalone: true,
    template: `
    <div>
      <hgroup class="tracking-tight text-slate-700">
        <h1 class="text-4xl font-bold lg:text-4xl">Abhishek Kumar Sah</h1>
        <h2 class="mt-3 text-xl font-medium tracking-tight lg:text-2xl">
          Fullstack Software Engineer
        </h2>
      </hgroup>

      <p class="mt-4 max-w-xs leading-normal lg:mt-8 lg:text-lg">
        I transform ideas into code, creating efficient, client-centric, and
        business-focused applications.
      </p>

    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroductionComponent {}
