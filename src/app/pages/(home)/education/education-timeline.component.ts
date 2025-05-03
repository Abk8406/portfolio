import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-education-timeline',
  imports: [],
  template: `
    <div class="relative flex flex-col gap-6 border-s border-gray-300 ps-8">
      <ng-content select="app-education-timeline-item" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationTimelineComponent {}
