import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="py-8 text-sm text-slate-400">
      Built with
      <a class="external-link text-slate-500" href="https://analogjs.org"
        >Analog</a
      >
      using
      <a class="external-link text-slate-500" href="https://angular.dev"
        >Angular</a
      >
      and
      <a class="external-link text-slate-500" href="https://tailwindcss.com"
        >Tailwind CSS</a
      >. Text written with the
      <a class="external-link text-slate-500" href="https://rsms.me/inter/"
        >Infer</a
      >
      font. Developed with
      <a
        class="external-link text-slate-500"
        href="https://code.visualstudio.com"
        >VS Code</a
      >, hosted and deployed on
      <a
        class="external-link text-slate-500"
        href="https://github.com/abk8406"
        >GitHub</a
      >.
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
