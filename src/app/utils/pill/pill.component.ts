import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pill',
  standalone: true,
  template: `
    <span
      class="inline-flex items-center rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold tracking-tight text-teal-600"
    >
      <ng-content />
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillComponent {}
