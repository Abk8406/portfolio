import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-education-timeline-item',
  standalone: true,
  host: { class: 'relative ps-6 py-1' }, // Provide padding for dot on the left
  template: `
    <!-- Timeline dot -->
    <span
      class="absolute left-0 top-4 h-3.5 w-3.5 rounded-full border-2 border-slate-100 bg-teal-400"
    ></span>

    <!-- Label line (Graduated 2022, etc.) -->
    <p class="text-sm text-gray-400 mb-1">
      <ng-content select="[label]" />
    </p>

    <!-- Degree -->
    <ng-content select="[degree]" />

    <!-- School -->
    <p class="text-gray-400">
      <ng-content select="[school]" />
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationTimelineItemComponent {}
