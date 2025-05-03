import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BootstrapIconDirective } from "../../../utils/icons";

@Component({
    selector: 'app-experience-card',
    standalone: true,
    imports: [BootstrapIconDirective],
    host: {
        class: 'block',
    },
    template: `
    <a
      [href]="redirectTo()"
      target="_blank"
      class="group/experience relative grid transition-all sm:grid-cols-8 sm:hover:!opacity-100 sm:group-hover/experiences:opacity-50"
    >
      <div
        class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg bg-slate-300/10 shadow-inner drop-shadow-lg lg:group-hover/experience:block"
      ></div>

      <span
        class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-tight text-slate-500 sm:col-span-2 lg:pr-3"
        ><ng-content select="[duration]"
      /></span>

      <section class="z-10 sm:col-span-6">
        <h3 class="mb-2 font-semibold leading-snug text-slate-700">
          <span
            class="group/header hover:text-teal-600 lg:group-hover/experience:text-teal-600"
          >
            <span>
              <ng-content select="[company]" /> ·
              <span class="inline-flex items-baseline gap-2">
                <ng-content select="[role]" />
                <i
                  class="animate inline-block translate-y-px transition-transform group-hover/header:-translate-y-px group-hover/header:translate-x-px lg:group-hover/experience:-translate-y-px lg:group-hover/experience:translate-x-px"
                  bootstrapIcon="box-arrow-in-up-right"
                ></i>
              </span>
            </span>
          </span>
        </h3>

        <ng-content select="p" />

        <div class="mt-4 space-y-2">
          <div class="grid grid-cols-12 items-baseline">
            <i bootstrapIcon="laptop"></i>
            <ng-content select="[frontend-technologies]" />
          </div>

          <div class="grid grid-cols-12 items-baseline">
            <i bootstrapIcon="database-fill-gear"></i>
            <ng-content select="[backend-technologies]" />
          </div>
        </div>
      </section>
    </a>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceCardComponent {
  readonly redirectTo = input.required<string>();
}
